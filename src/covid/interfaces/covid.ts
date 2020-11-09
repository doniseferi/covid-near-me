import { LocalAuthority } from "../../location/interfaces/localAuthority";

export interface Covid {
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
}

export interface CovidRepository {
  getAsync: (localAuthority: LocalAuthority, date: Date) => Promise<Covid>;
}
