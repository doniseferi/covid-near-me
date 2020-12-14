import {
  CovidStatistics,
  NationalCovidStatistics,
  StatisticsRepository,
} from "../interfaces/covid";
import { LocalAuthority } from "../../location/interfaces/localAuthority";
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
      getUrl: (localAuthority: LocalAuthority, date: Date) =>
        getCovidDataByLocalAuthorityUrl(localAuthority, date),
    },
    localAuthorityHttpClient
  );
  const fallback = repository(
    {
      getUrl: (localAuthority: LocalAuthority, date: Date) =>
        getNationalCovidApiUrl(localAuthority, date),
    },
    nationalCovidHttpClient
  );

  const circuitBreaker = circuitBreakerBuilder(resiliencyConfig)
    .build(
      async (localAuthority: LocalAuthority, date: Date) =>
        await repo.getAsync<CovidStatistics>(localAuthority, date)
    )
    .withFallBack(
      async (localAuthority: LocalAuthority, date: Date) =>
        await fallback.getAsync<NationalCovidStatistics>(localAuthority, date)
    );

  const covidRepository: StatisticsRepository = {
    getAsync: async (localAuthority: LocalAuthority, date: Date) =>
      await circuitBreaker.executeResiliently(localAuthority, date),
  };
  return {
    build: () => covidRepository,
  };
};
