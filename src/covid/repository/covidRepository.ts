import { LocalAuthority } from "../../location/interfaces/localAuthority";
import {
  CovidRepository,
  CovidStatistics,
  NationalCovidStatistics,
} from "../interfaces/covid";

export interface GetCovidApiUrl {
  getUrl: (localAuthority: LocalAuthority, date: Date) => string;
}

export interface HttpClient {
  getAsync: <T>(url: string) => Promise<T>;
}

const covidRepository = (
  covidUrlQueryHandler: GetCovidApiUrl,
  httpClient: HttpClient
): CovidRepository => {
  if (!httpClient) {
    throw new ReferenceError(
      "Dependency not satisfied. ReportRepository has a dependency on HttpClient."
    );
  }
  const getAsync = async <T extends CovidStatistics | NationalCovidStatistics>(
    localAuthority: LocalAuthority,
    date: Date
  ): Promise<T> => {
    const url = covidUrlQueryHandler.getUrl(localAuthority, date);
    const { data } = await httpClient.getAsync<{ data: T[] }>(url);
    return data[0];
  };

  return {
    getAsync: async <T extends CovidStatistics | NationalCovidStatistics>(
      localAuthority: LocalAuthority,
      date: Date
    ) => await getAsync<T>(localAuthority, date),
  };
};

export default covidRepository;
