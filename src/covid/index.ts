import { CovidRepository } from "./interfaces/covid";
import builder from "./builder/builder";
import { CovidStatistics, NationalCovidStatistics } from "./interfaces/covid";

const resiliencyConfig = {
  timeoutInMilliseconds: 6000,
  backOffPeriodInMilliseconds: 1000,
  errorThresholdPercentage: 50,
};

const covidRepository: CovidRepository = builder(resiliencyConfig).build();

export type { CovidStatistics, NationalCovidStatistics, CovidRepository };

export { covidRepository, builder };
