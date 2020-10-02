import ukLocalAuthorityGeoBoundariesRepository, {
  UKLocalAuthority,
  UKLocalAuthorityGeoBoundariesRepository,
} from "./ukLocalAuthorityGeoBoundariesRepository";
import postgresRepository from "./postgresRepository";
import appConfig from "../config/next.config";

export default ukLocalAuthorityGeoBoundariesRepository(
  postgresRepository(appConfig.ConnectionString)
);

export type { UKLocalAuthority, UKLocalAuthorityGeoBoundariesRepository };
