import { Client, ClientConfig } from "pg";

type UKLocalAuthorityResult = {
  local_authority_name: string;
  local_authority_code: string;
};

export type UKLocalAuthority = {
  Name: string;
  Code: string;
};

export interface UKLocalAuthorityQuery {
  latitude: number;
  longitude: number;
}

export interface UKLocalAuthorityGeoBoundariesRepository {
  getAsync: (query: UKLocalAuthorityQuery) => Promise<UKLocalAuthority>;
}

const ukLocalAuthorityGeoBoundariesRepository = (
  config: string | ClientConfig
): UKLocalAuthorityGeoBoundariesRepository => {
  const getAsync = async (
    query: UKLocalAuthorityQuery
  ): Promise<UKLocalAuthority> => {
    const client = new Client(config);
    await client.connect();
    const result = await client.query<UKLocalAuthorityResult>(
      `SELECT * From public.get_local_authority_by_geo_coordinates($1, $2)`,
      [query.latitude, query.longitude]
    );
    await client.end();

    return result.rows[0] !== null && result.rows[0] !== undefined
      ? {
          Name: result.rows[0].local_authority_name,
          Code: result.rows[0].local_authority_code,
        }
      : (() => {
          throw Error(
            `latitude: ${query.latitude} and longitude: ${query.longitude} is not in` +
              ` the United Kingdom. Please provide geo coordinates that fall within` +
              ` the boundaries of the United Kingdom.`
          );
        })();
  };

  return {
    getAsync: (query: UKLocalAuthorityQuery) => getAsync(query),
  };
};

export { ukLocalAuthorityGeoBoundariesRepository };
