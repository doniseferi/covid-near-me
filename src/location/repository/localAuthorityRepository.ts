import { GeoCoordinates } from "../valueTypes/geoCoordinates";
import {
  Location,
  LocalAuthorityRepository,
} from "../interfaces/localAuthority";

interface Repository {
  queryAsync: <T>(command: { text: string; values: string[] }) => Promise<T[]>;
}

export default (repository: Repository): LocalAuthorityRepository => {
  if (!repository) {
    throw new ReferenceError(
      "Dependency not satisfied. LocalAuthorityRepository has a dependency on Repository."
    );
  }

  const getAsync = async ({
    latitude,
    longitude,
  }: GeoCoordinates): Promise<Location> => {
    const result = await repository.queryAsync<LocalAuthorityResult>({
      text: `SELECT * From public.get_local_authority_by_geo_coordinates($1, $2)`,
      values: [`${latitude}`, `${longitude}`],
    });
    return validate(result)
      ? map(result, { latitude, longitude })
      : throwCoordinatesNotFoundError(latitude, longitude);
  };

  const validate = (entity: LocalAuthorityResult[]) =>
    entity && entity?.length === 1;

  const map = (
    entity: LocalAuthorityResult[],
    geoCoordinates: GeoCoordinates
  ): Location =>
    entity.map((e) => ({
      name: e.local_authority_name,
      code: e.local_authority_code,
      geoCoordinates: geoCoordinates,
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
    getAsync: async (geoCoordinates: GeoCoordinates) =>
      await getAsync(geoCoordinates),
  };
};

interface LocalAuthorityResult {
  local_authority_name: string;
  local_authority_code: string;
}
