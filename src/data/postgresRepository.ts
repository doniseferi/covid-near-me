import { Client, ClientConfig } from "pg";

export default (config: string | ClientConfig) => {
  const executeAsync = async <T>(command: {
    text: string;
    values: string[];
  }): Promise<T[]> => {
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
    executeAsync: async <T>(command: {
      text: string;
      values: string[];
    }): Promise<T[]> => await executeAsync(command),
  };
};
