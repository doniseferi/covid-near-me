import { ukLocalAuthorityGeoBoundariesRepository as Repo } from "./ukLocalAuthorityGeoBoundariesRepository";

const ukLocalAuthorityGeoBoundariesRepository = Repo({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 25432,
});

export { ukLocalAuthorityGeoBoundariesRepository };
