import { GeoCoordinates } from "../valueTypes/geoCoordinates";
import {
  Location,
  LocalAuthorityRepository,
} from "../interfaces/localAuthority";

interface Repository {
  queryAsync: (
    latitude: number,
    longitude: number
  ) => Promise<{
    local_authority_name: string;
    local_authority_code: string;
  }>;
}

const localAuthorityRepository = (
  repository: Repository
): LocalAuthorityRepository => {
  if (!repository) {
    throw new ReferenceError(
      "Dependency not satisfied. LocalAuthorityRepository has a dependency on Repository."
    );
  }

  const throwCoordinatesNotFoundError = (latitude: number, longitude: number) =>
    (() => {
      throw new Error(
        `latitude: ${latitude} and longitude: ${longitude} is not in` +
          ` the United Kingdom. Please provide geo coordinates that fall within` +
          ` the boundaries of the United Kingdom.`
      );
    })();

  const getAsync = async ({
    latitude,
    longitude,
  }: GeoCoordinates): Promise<Location> => {
    const result = await repository.queryAsync(latitude, longitude);
    return result
      ? {
          code: result.local_authority_code,
          name: result.local_authority_name,
          geoCoordinates: {
            latitude,
            longitude,
          },
        }
      : throwCoordinatesNotFoundError(latitude, longitude);
  };

  return {
    getAsync: async (geoCoordinates: GeoCoordinates) =>
      await getAsync(geoCoordinates),
  };
};

export default localAuthorityRepository;
