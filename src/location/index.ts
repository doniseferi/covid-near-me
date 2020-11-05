import config from "../config/next.config";
import postgresRepository from "./infastructure/postgresRepository";
import localAuthorityRepository from "./repository/localAuthorityRepository";
import { LocalAuthorityRepository } from "./interfaces/localAuthority";
import { GeoCoordinates } from "./valueTypes/geoCoordinates";
import circuitBreakerBuilder from "../resiliency/index";

const defaultLocationRepository: LocalAuthorityRepository = localAuthorityRepository(
  postgresRepository(config.connectionString)
);

const circuitBreaker = circuitBreakerBuilder({
  timeoutInMilliseconds: 6_000,
  backOffPeriodInMilliseconds: 1_500,
  errorThresholdPercentage: 49,
}).build(
  async (geoCoordinates: GeoCoordinates) =>
    await defaultLocationRepository.getAsync(geoCoordinates)
);

const resilientLocationRepository: LocalAuthorityRepository = {
  getAsync: async (geoCoordinates: GeoCoordinates) =>
    await circuitBreaker.executeResiliently(geoCoordinates),
};

export { resilientLocationRepository as locationRepository };
