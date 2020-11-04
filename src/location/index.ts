import config from "../config/next.config";
import postgresRepository from "./infastructure/postgresRepository";
import localAuthorityRepository from "./repository/localAuthorityRepository";
import { LocalAuthorityRepository } from "./interfaces/localAuthority";
import { GeoCoordinates } from "./valueTypes/geoCoordinates";

const defaultLocationRepository: LocalAuthorityRepository = localAuthorityRepository(
  postgresRepository(config.connectionString)
);

const resilientLocationRepository: LocalAuthorityRepository = {
  getAsync: async (geoCoordinates: GeoCoordinates) =>
    await defaultLocationRepository.getAsync(geoCoordinates),
};

export { resilientLocationRepository as locationRepository };
