import postgresRepository from "../infastructure/postgresRepository";
import { LocalAuthorityRepository } from "../interfaces/localAuthority";
import localAuthorityRepository from "../repository/localAuthorityRepository";
import { GeoCoordinates } from "../valueTypes/geoCoordinates";
import circuitBreakerBuilder, {
  ResiliencyConfig,
} from "../../resiliency/index";

export default (
  resiliencyConfig: ResiliencyConfig,
  connectionString: string
) => {
  if (!resiliencyConfig) {
    throw new ReferenceError("Resiliency Config is null or undefined.");
  }
  if (!connectionString) {
    throw new ReferenceError("The connection string is null or undefined.");
  }

  const localAuthorityRepo: LocalAuthorityRepository = localAuthorityRepository(
    postgresRepository(connectionString)
  );

  const circuitBreaker = circuitBreakerBuilder(resiliencyConfig).build(
    async (geoCoordinates: GeoCoordinates) =>
      await localAuthorityRepo.getAsync(geoCoordinates)
  );

  const resilientLocalAuthorityRepository: LocalAuthorityRepository = {
    getAsync: async (geoCoordinates: GeoCoordinates) =>
      await circuitBreaker.executeResiliently(geoCoordinates),
  };
  return {
    build: () => resilientLocalAuthorityRepository,
  };
};
