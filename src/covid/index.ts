import { Covid, CovidRepository } from "./interfaces/covid";
import httpClient from "./infastructure/httpClient";
import repository from "./repository/covidRepository";
import resilienceDecorator from "../resiliency/index";
import {
  getNationalCovidApiUrl,
  getCovidDataByLocalAuthorityUrl,
} from "./url/index";
import { Location } from "../location";

const resiliencyConfig = {
  timeoutInMilliseconds: 1000,
  backOffPeriodInMilliseconds: 3000,
  errorThresholdPercentage: 50,
};

const repo = repository(
  {
    getUrl: (location: Location, date: Date) =>
      getCovidDataByLocalAuthorityUrl(location, date),
  },
  httpClient
);
const fallback = repository(
  {
    getUrl: (location: Location, date: Date) =>
      getNationalCovidApiUrl(location, date),
  },
  httpClient
);
const covidRepository: CovidRepository = {
  getAsync: async (location: Location, date: Date) =>
    await resilienceDecorator(
      resiliencyConfig,
      (location: Location, date: Date) => repo.getAsync(location, date),
      (location: Location, date: Date) => fallback.getAsync(location, date)
    ).executeResiliently(location, date),
};

export type { Covid, CovidRepository };
export { covidRepository };
