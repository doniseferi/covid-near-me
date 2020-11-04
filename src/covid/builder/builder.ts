import { CovidRepository } from "../interfaces/covid";
import { Location } from "../../location/interfaces/localAuthority";
import httpClient from "../infastructure/index";
import repository, { HttpClient } from "../repository/covidRepository";
import resilienceDecorator, { ResiliencyConfig } from "../../resiliency/index";
import {
  getNationalCovidApiUrl,
  getCovidDataByLocalAuthorityUrl,
} from "../url/index";

export default (
  resiliencyConfig: ResiliencyConfig,
  localAuthorityHttpClient: HttpClient = httpClient,
  nationalCovidHttpClient: HttpClient = httpClient
) => {
  const repo = repository(
    {
      getUrl: (location: Location, date: Date) =>
        getCovidDataByLocalAuthorityUrl(location, date),
    },
    localAuthorityHttpClient
  );
  const fallback = repository(
    {
      getUrl: (location: Location, date: Date) =>
        getNationalCovidApiUrl(location, date),
    },
    nationalCovidHttpClient
  );
  const covidRepository: CovidRepository = {
    getAsync: async (location: Location, date: Date) =>
      await resilienceDecorator(
        resiliencyConfig,
        (location: Location, date: Date) => repo.getAsync(location, date),
        (location: Location, date: Date) => fallback.getAsync(location, date)
      ).executeResiliently(location, date),
  };
  return {
    build: () => covidRepository,
  };
};
