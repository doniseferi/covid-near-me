import { LocalAuthority } from "../../location/interfaces/localAuthority";
import { Covid, CovidRepository } from "../interfaces/covid";

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
  ): Promise<Covid> => {
    const url = covidUrlQueryHandler.getUrl(localAuthority, date);
    const result = await httpClient.getAsync<{ data: Covid[] }>(url);
    return result.data[0];
  };

  return {
    getAsync: async (localAuthority: LocalAuthority, date: Date) =>
      await getAsync(localAuthority, date),
  };
};
