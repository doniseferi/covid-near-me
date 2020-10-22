import config from "../config/next.config";
import postgresRepository from "./infastructure/postgresRepository";
import localAuthorityRepository from "./repository/localAuthorityRepository";
import {
  Location,
  LocalAuthorityRepository,
} from "./interfaces/localAuthority";
import resilientPolicies from "../resiliency/index";
import { GeoCoordinates } from "./valueTypes/geoCoordinates";

const defaultLocationRepository: LocalAuthorityRepository = localAuthorityRepository(
  postgresRepository(config.connectionString)
);

const resilientLocationRepository: LocalAuthorityRepository = {
  getAsync: async (geoCoordinates: GeoCoordinates) =>
    await resilientPolicies.execute(
      async () => await defaultLocationRepository.getAsync(geoCoordinates)
    ),
};

export type { Location, LocalAuthorityRepository };
export { resilientLocationRepository as locationRepository };
