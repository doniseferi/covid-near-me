import { ukLocalAuthorityGeoBoundariesRepository as Repo } from "./ukLocalAuthorityGeoBoundariesRepository";

const ukLocalAuthorityGeoBoundariesRepository = Repo(
  "postgresql://postgres:password@localhost:25432/postgres?timeout=10"
);

export { ukLocalAuthorityGeoBoundariesRepository };
