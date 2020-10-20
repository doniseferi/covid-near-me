import { Location } from "../../location/domain/localAuthority";

export type CovidReport = {
  newCasesPublished: string;
  newCasesBySpecimen: string;
  newDeathsPublished: string;
  rateOfCumulativeCasesBySpecimenDate: string;
  cumulativeCasesBySpecimen: string;
  rateOfCumulativeDeathsBySpecimen: string;
  cumulativeDeathsBySpecimen: string;
  newDeaths28DaysByPublishDate: string;
  cumulativeDeaths28DaysByPublishDate: string;
  cumulativeDeaths28DaysByPublishDateRate: number;
};

export interface CovidReportRepository {
  getAsync: (location: Location, date: Date) => Promise<CovidReport>;
}
