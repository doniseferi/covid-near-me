import { LocalAuthority } from "../../location/interfaces/localAuthority";

export interface CovidStatistics {
  areaType: string;
  areaName: string;
  areaCode: string;
  date: string;
  newCasesByPublishDate: number | null;
  cumCasesByPublishDate: number | null;
  newCasesBySpecimenDate: number | null;
  cumCasesBySpecimenDateRate: number | null;
  cumCasesBySpecimenDate: number | null;
  newDeaths28DaysByPublishDate: number | null;
  cumDeaths28DaysByPublishDate: number | null;
  cumDeaths28DaysByPublishDateRate: number | null;
  newDeaths28DaysByDeathDate: number | null;
  cumDeaths28DaysByDeathDate: number | null;
  cumDeaths28DaysByDeathDateRate: number | null;
}

type AgeStatistics = {
  age: string;
  value: number;
  rate: number;
};

export interface NationalCovidStatistics extends CovidStatistics {
  maleCases: AgeStatistics[] | null;
  femaleCases: AgeStatistics[] | null;
  newPillarOneTestsByPublishDate: number | null;
  cumPillarOneTestsByPublishDate: number | null;
  newPillarTwoTestsByPublishDate: number | null;
  cumPillarTwoTestsByPublishDate: number | null;
  newPillarThreeTestsByPublishDate: number | null;
  cumPillarThreeTestsByPublishDate: number | null;
  newAdmissions: number | null;
  cumAdmissions: number | null;
  cumAdmissionsByAge: AgeStatistics[] | null;
  cumTestsByPublishDate: number | null;
  newTestsByPublishDate: number | null;
  covidOccupiedMVBeds: number | null;
  hospitalCases: number | null;
}

export interface CovidRepository {
  getAsync: (
    localAuthority: LocalAuthority,
    date: Date
  ) => Promise<CovidStatistics>;
}
