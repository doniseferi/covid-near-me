import { ukLocalAuthorityGeoBoundariesRepository as Repo } from "./ukLocalAuthorityGeoBoundariesRepository";
import appConfig from "../config/next.config";

const ukLocalAuthorityGeoBoundariesRepository = Repo(
  appConfig.ConnectionString
);

export { ukLocalAuthorityGeoBoundariesRepository };
