import axios from "axios";
import { CovidReport } from "../index";
import { CovidHttpClient } from "../repository/covidReportRepository";

export default (): CovidHttpClient => {
  const getAsync = async (url: string): Promise<CovidReport> => {
    const { data } = await axios.get<CovidResponse>(url);
    const result = (data.data[0] as unknown) as CovidReport;
    return result;
  };
  // !url
  //   ? (() => {
  //       throw new ReferenceError("");
  //     })()
  //   : await axios.get<CovidReport>(url);

  return {
    getAsync: async (url: string) => await getAsync(url),
  };
};

interface CovidData {
  date: string;
  name: string;
  code: string;
  newCasesPublished: number;
  newCasesBySpecimen: number;
  newDeathsPublished: number;
  rateOfCumulativeCasesBySpecimenDate: number;
  cumulativeCasesBySpecimen: number;
  rateOfCumulativeDeathsBySpecimen: number;
  cumulativeDeathsBySpecimen: number;
  newDeaths28DaysByPublishDate: number;
  cumulativeDeaths28DaysByPublishDate: number;
  cumulativeDeaths28DaysByPublishDateRate: number;
}

interface Pagination {
  current: string;
  next?: any;
  previous?: any;
  first: string;
  last: string;
}

interface CovidResponse {
  length: number;
  maxPageLimit: number;
  data: CovidData[];
  pagination: Pagination;
}
