import config from "../config/next.config";
import { LocalAuthorityRepository } from "./interfaces/localAuthority";
import builder from "./builder/builder";

const resiliencyConfig = {
  timeoutInMilliseconds: 6000,
  backOffPeriodInMilliseconds: 1000,
  errorThresholdPercentage: 50,
};

const locationRepository: LocalAuthorityRepository = builder(
  resiliencyConfig,
  config.connectionString
).build();

export { locationRepository, builder };
