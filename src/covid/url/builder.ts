export type AreaFilter = "ltla" | "nation";

export default (covidApiBaseUrl: string) => {
  if (!covidApiBaseUrl) {
    throw new ReferenceError(
      "Covid Api Base Url is null, undefined, empty or whitespace. Please provide a Covid Api Base Url"
    );
  }

  const throwOnNullUndefinedOrEmpty = (missingParam: string): string =>
    (() => {
      throw new Error(`Please provide a ${missingParam}.`);
    })();

  const build = (
    date: Date,
    areaFilter: AreaFilter,
    areaFilterValue: string
  ): string =>
    !date
      ? throwOnNullUndefinedOrEmpty("date")
      : !areaFilter
      ? throwOnNullUndefinedOrEmpty("areaFilter")
      : !areaFilterValue
      ? throwOnNullUndefinedOrEmpty("areFilterValue")
      : `${covidApiBaseUrl}/v1/data?filters={date=${date
          .toISOString()
          .substring(
            0,
            10
          )};areaType=${areaFilter};areaCode=${areaFilterValue}&structure={"date": "date","name": "areaName","code": "areaCode","newCasesPublished":"newCasesByPublishDate","newCasesBySpecimen":"newCasesBySpecimenDate","newDeathsPublished":"newDeathsByPublishDate","rateOfCumulativeCasesBySpecimenDate":"cumCasesBySpecimenDateRate","cumulativeCasesBySpecimen":"cumCasesBySpecimenDate","rateOfCumulativeDeathsBySpecimen":"cumCasesBySpecimenDateRate","cumulativeDeathsBySpecimen":"cumCasesBySpecimenDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumulativeDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","cumulativeDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate"}`;

  return {
    build: (date: Date, areaFilter: AreaFilter, areaFilterValue: string) =>
      build(date, areaFilter, areaFilterValue),
  };
};
