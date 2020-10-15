import config from "../config/next.config";
import postgresRepository from "./infastructure/postgresRepository";
import localAuthorityRepository from "./repository/localAuthorityRepository";
import { Location, LocalAuthorityRepository } from "./domain/localAuthority";

const locationRepository = localAuthorityRepository(
  postgresRepository(config.ConnectionString)
);

export type { Location, LocalAuthorityRepository };
export { locationRepository };
