import { Client, ClientConfig } from "pg";

export default (config: string | ClientConfig) => {
  const queryAsync = async <T>(command: {
    text: string;
    values: string[];
  }): Promise<T[]> => {
    if (!config) {
      throw new ReferenceError(
        "Dependency not satisfied. PostgresRepository has a dependency on a connection string or ClientConfig."
      );
    }

    const client = new Client(config);
    return await client
      .connect()
      .then(
        async () =>
          await client
            .query<T>({ name: "geofunction", ...command })
            .then((result) => result.rows)
      )
      .finally(async () => client.end());
  };

  return {
    queryAsync: async <T>(command: {
      text: string;
      values: string[];
    }): Promise<T[]> => await queryAsync(command),
  };
};
