import { LocalAuthority } from "../../location/interfaces/localAuthority";
import { CovidRepository, CovidStatistics } from "../interfaces/covid";

export interface GetCovidApiUrl {
  getUrl: (localAuthority: LocalAuthority, date: Date) => string;
}

export interface HttpClient {
  getAsync: <T>(url: string) => Promise<T>;
}

export default (
  covidUrlQueryHandler: GetCovidApiUrl,
  httpClient: HttpClient
): CovidRepository => {
  if (!httpClient) {
    throw new ReferenceError(
      "Dependency not satisfied. ReportRepository has a dependency on HttpClient."
    );
  }
  const getAsync = async (
    localAuthority: LocalAuthority,
    date: Date
  ): Promise<CovidStatistics> => {
    const url = covidUrlQueryHandler.getUrl(localAuthority, date);
    const result = await httpClient.getAsync<{ data: CovidStatistics[] }>(url);
    return result.data[0];
  };

  return {
    getAsync: async (localAuthority: LocalAuthority, date: Date) =>
      await getAsync(localAuthority, date),
  };
};
