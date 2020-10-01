import postgresRepository from "./postgresRepository";

const ukLocalAuthorityGeoBoundariesRepository = (
  connectionString: string
): UKLocalAuthorityGeoBoundariesRepository => {
  const repo = postgresRepository(connectionString);
  const getAsync = async ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }): Promise<UKLocalAuthority> => {
    const result = await repo.executeAync<UKLocalAuthorityResult>({
      text: `SELECT * From public.get_local_authority_by_geo_coordinates($1, $2)`,
      values: [`${latitude}`, `${longitude}`],
    });

    return result?.length === 0
      ? (() => {
          throw Error(
            `latitude: ${latitude} and longitude: ${longitude} is not in` +
              ` the United Kingdom. Please provide geo coordinates that fall within` +
              ` the boundaries of the United Kingdom.`
          );
        })()
      : {
          Name: result[0].local_authority_name,
          Code: result[0].local_authority_code,
        };
  };

  return {
    getAsync: (query: { latitude: number; longitude: number }) =>
      getAsync(query),
  };
};

export type UKLocalAuthority = {
  Name: string;
  Code: string;
};

export interface UKLocalAuthorityGeoBoundariesRepository {
  getAsync: (query: {
    latitude: number;
    longitude: number;
  }) => Promise<UKLocalAuthority>;
}

type UKLocalAuthorityResult = {
  local_authority_name: string;
  local_authority_code: string;
};

export { ukLocalAuthorityGeoBoundariesRepository };
