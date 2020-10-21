import { Location } from "../../location/index";
import { CovidReport, CovidReportRepository } from "../interfaces/covidReport";

export interface HttpClient {
  getAsync: <T>(url: string) => Promise<T>;
}

export default (
  covidReportBaseUrl: string,
  httpClient: HttpClient
): CovidReportRepository => {
  if (!httpClient) {
    throw new ReferenceError(
      "Dependency not satisfied. ReportRepository has a dependency on HttpClient."
    );
  }
  const getAsync = async (
    location: Location,
    date: Date
  ): Promise<CovidReport> =>
    (await httpClient.getAsync<{ data: CovidReport[] }>(getUrl(location, date)))
      .data[0];

  const getUrl = (location: Location, date: Date): string =>
    !location
      ? (() => {
          throw new ReferenceError("Please provide a value for Location.");
        })()
      : !date
      ? (() => {
          throw new Error("Please provide a date.");
        })()
      : `${covidReportBaseUrl}/v1/data?filters={date=${date
          .toISOString()
          .substring(0, 10)};areaType=ltla;areaCode=${
          location.code
        }&structure={"date": "date","name": "areaName","code": "areaCode","newCasesPublished":"newCasesByPublishDate","newCasesBySpecimen":"newCasesBySpecimenDate","newDeathsPublished":"newDeathsByPublishDate","rateOfCumulativeCasesBySpecimenDate":"cumCasesBySpecimenDateRate","cumulativeCasesBySpecimen":"cumCasesBySpecimenDate","rateOfCumulativeDeathsBySpecimen":"cumCasesBySpecimenDateRate","cumulativeDeathsBySpecimen":"cumCasesBySpecimenDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumulativeDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","cumulativeDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate"}`;

  return {
    getAsync: async (location: Location, date: Date) =>
      await getAsync(location, date),
  };
};
