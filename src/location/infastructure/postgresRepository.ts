import { Pool } from "pg";
interface LocalAuthorityResult {
  local_authority_name: string;
  local_authority_code: string;
}

export default (connectionString: string) => {
  if (!connectionString) {
    throw new ReferenceError(
      "Dependency not satisfied. PostgresRepository has a dependency on a connection string or ClientConfig."
    );
  }

  const pool = new Pool({
    connectionString: connectionString,
  });

  const query = (latitude: number, longitude: number) => ({
    name: "getGeoCoordinates",
    text: "SELECT * From public.get_local_authority_by_geo_coordinates($1, $2)",
    values: [latitude.toLocaleString(), longitude.toLocaleString()],
  });

  const queryAsync = async (
    latitude: number,
    longitude: number
  ): Promise<LocalAuthorityResult> => {
    const { rows } = await pool.query<LocalAuthorityResult>(
      query(latitude, longitude)
    );
    return rows[0]; // TODO: when logger decided, catch log and rethrow
  };

  return {
    queryAsync: async (
      latitude: number,
      longitude: number
    ): Promise<LocalAuthorityResult> => await queryAsync(latitude, longitude),
  };
};
