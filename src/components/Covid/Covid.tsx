import { CovidStatistics, NationalCovidStatistics } from "../../covid";
import { AgeStatistics } from "../../covid/interfaces/covid";
import { isNationalCovidStatisticsType } from "../../utils";
import DescriptionList, {
  DescriptionItem,
} from "../DescriptionList/DescriptionList";

const ageStatistics = (
  term: string,
  statistics: AgeStatistics[]
): DescriptionItem[] =>
  (
    statistics?.map((e) => [
      { term: `${term} by age (${e.age})`, description: `${e.value ?? ""}` },
      {
        term: `rate of ${term} by age (${e.age})`,
        description: `${e.rate ?? ""}`,
      },
    ]) ?? []
  ).reduce((accumulator, value) => accumulator.concat(value), []);

const covidStatistics = (statistics: CovidStatistics): DescriptionItem[] =>
  [
    { term: "location", description: statistics.areaName },
    {
      term: "date",
      description: `${new Date(statistics.date).toDateString()}`,
    },
    {
      term: "new cases",
      description: `${statistics.newCasesByPublishDate ?? ""}`,
    },
    {
      term: "cumulative cases",
      description: `${statistics.cumCasesByPublishDate ?? ""}`,
    },
    {
      term: "new positive cases collected on date",
      description: `${statistics.newCasesBySpecimenDate ?? ""}`,
    },
    {
      term:
        "rate of cumulative cases by specimen date per 100k resident population",
      description: `${statistics.cumCasesBySpecimenDateRate ?? ""}`,
    },
    {
      term: "cumulative cases by specimen date per 100k resident population",
      description: `${statistics.cumCasesBySpecimenDate ?? ""}`,
    },
    {
      term: "cumulative cases by specimen date per 100k resident population",
      description: `${statistics.cumCasesBySpecimenDate ?? ""}`,
    },
    {
      term: "deaths within 28 days of positive test",
      description: `${statistics.newDeaths28DaysByPublishDate ?? ""}`,
    },
    {
      term: "cumulative deaths within 28 days of positive test",
      description: `${statistics.cumDeaths28DaysByPublishDate ?? ""}`,
    },
    {
      term:
        "rate of cumulative deaths within 28 days of positive test per 100k",
      description: `${statistics.newDeaths28DaysByDeathDate ?? ""}`,
    },
    {
      term: "deaths within 28 days of positive test by death date",
      description: `${statistics.newDeaths28DaysByDeathDate ?? ""}`,
    },
    {
      term: "cumulative deaths within 28 days of positive test by death date",
      description: `${statistics.cumDeaths28DaysByDeathDate ?? ""}`,
    },
    {
      term:
        "rate of cumulative deaths within 28 days of positive test by death date per 100k resident population",
      description: `${statistics.cumDeaths28DaysByDeathDateRate ?? ""}`,
    },
  ].concat(
    isNationalCovidStatisticsType(statistics)
      ? (
          (statistics.maleCases &&
            ageStatistics("male cases", statistics.maleCases)) ??
          []
        )
          .concat(
            (statistics.femaleCases &&
              ageStatistics("female cases", statistics.femaleCases)) ??
              []
          )
          .concat(
            (statistics.cumAdmissionsByAge &&
              ageStatistics(
                "cumulative admissions",
                statistics.cumAdmissionsByAge
              )) ??
              []
          )
          .concat([
            {
              term: "new hospital admissions",
              description: `${statistics.newAdmissions ?? "" ?? ""}`,
            },
            {
              term: "cumulative number of hopsital admissions",
              description: `${statistics.cumAdmissions ?? ""}`,
            },
            {
              term: "cumulative tests",
              description: `${statistics.cumTestsByPublishDate ?? ""}`,
            },
            {
              term: "new tests",
              description: `${statistics.newTestsByPublishDate ?? ""}`,
            },
            {
              term: "covid-19 occupied beds with mechanical ventilators",
              description: `${statistics.covidOccupiedMVBeds ?? ""}`,
            },
            {
              term: "hospital cases",
              description: `${statistics.hospitalCases ?? ""}`,
            },
          ])
      : []
  );

const Covid = (statistics: CovidStatistics | NationalCovidStatistics) => {
  return DescriptionList(covidStatistics(statistics));
};

export default Covid;
