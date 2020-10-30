import { Location } from "../../location/index";
import { Covid, CovidRepository } from "../interfaces/covid";

export interface GetCovidApiUrl {
  getUrl: (location: Location, date: Date) => string;
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
  const getAsync = async (location: Location, date: Date): Promise<Covid> => {
    const url = covidUrlQueryHandler.getUrl(location, date);
    const result = await httpClient.getAsync<{ data: Covid[] }>(url);
    return result.data[0];
  };

  return {
    getAsync: async (location: Location, date: Date) =>
      await getAsync(location, date),
  };
};
