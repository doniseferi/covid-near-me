import { CovidRepository } from "../interfaces/covid";
import { Location } from "../../location/interfaces/localAuthority";
import httpClient from "../infastructure/index";
import repository, { HttpClient } from "../repository/covidRepository";
import circuitBreakerBuilder, {
  ResiliencyConfig,
} from "../../resiliency/index";
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

  const circuitBreaker = circuitBreakerBuilder(resiliencyConfig)
    .build(
      async (location: Location, date: Date) =>
        await repo.getAsync(location, date)
    )
    .withFallBack(
      async (location: Location, date: Date) =>
        await fallback.getAsync(location, date)
    );

  const covidRepository: CovidRepository = {
    getAsync: async (location: Location, date: Date) =>
      await circuitBreaker.executeResiliently(location, date),
  };
  return {
    build: () => covidRepository,
  };
};
