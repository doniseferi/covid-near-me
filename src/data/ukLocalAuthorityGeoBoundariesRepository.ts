interface Repository {
  executeAsync: <T>(command: {
    text: string;
    values: string[];
  }) => Promise<T[]>;
}

export default (
  repository: Repository
): UKLocalAuthorityGeoBoundariesRepository => {
  const getAsync = async (
    latitude: number,
    longitude: number
  ): Promise<UKLocalAuthority> =>
    await repository
      .executeAsync<UKLocalAuthorityResult>({
        text: `SELECT * From public.get_local_authority_by_geo_coordinates($1, $2)`,
        values: [`${latitude}`, `${longitude}`],
      })
      .then((entity) =>
        validate(entity)
          ? map(entity)
          : throwCoordinatesNotFoundError(latitude, longitude)
      );

  const validate = (entity: UKLocalAuthorityResult[]) =>
    entity && entity.length === 1;

  const map = (entity: UKLocalAuthorityResult[]): UKLocalAuthority =>
    entity.map((e) => ({
      Name: e.local_authority_name,
      Code: e.local_authority_code,
    }))[0];

  const throwCoordinatesNotFoundError = (latitude: number, longitude: number) =>
    (() => {
      throw Error(
        `latitude: ${latitude} and longitude: ${longitude} is not in` +
          ` the United Kingdom. Please provide geo coordinates that fall within` +
          ` the boundaries of the United Kingdom.`
      );
    })();

  return {
    getAsync: async (latitude: number, longitude: number) =>
      await getAsync(latitude, longitude),
  };
};

export type UKLocalAuthority = {
  Name: string;
  Code: string;
};
export interface UKLocalAuthorityGeoBoundariesRepository {
  getAsync: (latitude: number, longitude: number) => Promise<UKLocalAuthority>;
}

type UKLocalAuthorityResult = {
  local_authority_name: string;
  local_authority_code: string;
};
