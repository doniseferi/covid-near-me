import config from "../config/next.config";
import postgresRepository from "./infastructure/postgresRepository";
import localAuthorityRepository from "./repository/localAuthorityRepository";
import { Location, LocalAuthorityRepository } from "./interfaces/localAuthority";

const locationRepository = localAuthorityRepository(
  postgresRepository(config.connectionString)
);

export type { Location, LocalAuthorityRepository };
export { locationRepository };
