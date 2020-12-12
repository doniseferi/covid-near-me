import { CovidRepository, StatisticsRepository } from "./interfaces/covid";
import builder from "./builder/builder";
import { CovidStatistics, NationalCovidStatistics } from "./interfaces/covid";

const resiliencyConfig = {
  timeoutInMilliseconds: 6000,
  backOffPeriodInMilliseconds: 1000,
  errorThresholdPercentage: 50,
};

const covidRepository: StatisticsRepository = builder(resiliencyConfig).build();

export type {
  StatisticsRepository,
  CovidStatistics,
  NationalCovidStatistics,
  CovidRepository,
};

export { covidRepository, builder };
