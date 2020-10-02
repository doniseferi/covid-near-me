import { Client, ClientConfig } from "pg";

export default (config: string | ClientConfig) => {
  const executeAync = async <T>(command: {
    text: string;
    values: string[];
  }): Promise<T[]> => {
    const client = new Client(config);
    return await client
      .connect()
      .then(
        async () => await client.query<T>(command).then((result) => result.rows)
      )
      .finally(async () => client.end());
  };

  return {
    executeAync: async <T>(command: {
      text: string;
      values: string[];
    }): Promise<T[]> => await executeAync(command),
  };
};
