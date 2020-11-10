import { CovidRepository } from "./interfaces/covid";
import builder from "./builder/builder";
import { Covid } from "./interfaces/covid";

const resiliencyConfig = {
  timeoutInMilliseconds: 6000,
  backOffPeriodInMilliseconds: 1000,
  errorThresholdPercentage: 50,
};

const covidRepository: CovidRepository = builder(resiliencyConfig).build();

export type { Covid, CovidRepository };
export { covidRepository, builder };
