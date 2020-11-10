import config from "../config/next.config";
import {
  LocalAuthorityRepository,
  Location,
} from "./interfaces/localAuthority";
import builder from "./builder/builder";
import { GeoCoordinates } from "./valueTypes/geoCoordinates";

const resiliencyConfig = {
  timeoutInMilliseconds: 6000,
  backOffPeriodInMilliseconds: 1000,
  errorThresholdPercentage: 50,
};

const locationRepository: LocalAuthorityRepository = builder(
  resiliencyConfig,
  config.connectionString
).build();

export type { Location, GeoCoordinates, LocalAuthorityRepository };
export { locationRepository, builder };
