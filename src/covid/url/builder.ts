export type AreaFilter = "ltla" | "nation";

export default (covidApiBaseUrl: string) => {
  if (!covidApiBaseUrl) {
    throw new ReferenceError(
      "Covid Api Base Url is null, undefined, empty or whitespace. Please provide a Covid Api Base Url"
    );
  }

  const localAuthorityRequestDataStructure = `{"areaType":"areaType","areaName":"areaName","areaCode":"areaCode","date":"date","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumCasesBySpecimenDateRate":"cumCasesBySpecimenDateRate","newCasesBySpecimenDate":"newCasesBySpecimenDate","cumCasesBySpecimenDate":"cumCasesBySpecimenDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDateRate":"cumDeaths28DaysByDeathDateRate"}`;
  const nationRequestDataStructure = `{"areaType":"areaType","areaName":"areaName","areaCode":"areaCode","date":"date","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumCasesBySpecimenDateRate":"cumCasesBySpecimenDateRate","newCasesBySpecimenDate":"newCasesBySpecimenDate","cumCasesBySpecimenDate":"cumCasesBySpecimenDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDateRate":"cumDeaths28DaysByDeathDateRate","maleCases":"maleCases","femaleCases":"femaleCases","newPillarOneTestsByPublishDate":"newPillarOneTestsByPublishDate","cumPillarOneTestsByPublishDate":"cumPillarOneTestsByPublishDate","newPillarTwoTestsByPublishDate":"newPillarTwoTestsByPublishDate","cumPillarTwoTestsByPublishDate":"cumPillarTwoTestsByPublishDate","newPillarThreeTestsByPublishDate":"newPillarThreeTestsByPublishDate","cumPillarThreeTestsByPublishDate":"cumPillarThreeTestsByPublishDate","newAdmissions":"newAdmissions","cumAdmissions":"cumAdmissions","cumAdmissionsByAge":"cumAdmissionsByAge","cumTestsByPublishDate":"cumTestsByPublishDate","newTestsByPublishDate":"newTestsByPublishDate","covidOccupiedMVBeds":"covidOccupiedMVBeds","hospitalCases":"hospitalCases"}`;

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
      ? throwOnNullUndefinedOrEmpty("areaFilterValue")
      : `${covidApiBaseUrl}/v1/data?filters={date=${date
          .toISOString()
          .substring(
            0,
            10
          )};areaType=${areaFilter};areaCode=${areaFilterValue}&structure=${
          areaFilter === "ltla"
            ? localAuthorityRequestDataStructure
            : nationRequestDataStructure
        }`;

  return {
    build: (date: Date, areaFilter: AreaFilter, areaFilterValue: string) =>
      build(date, areaFilter, areaFilterValue),
  };
};
