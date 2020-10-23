import { covidRepository } from "./index";

test.concurrent.each`
localAuthorityCode | newCasesPublished | newCasesBySpecimen | newDeathsPublished | rateOfCumulativeCasesBySpecimenDate | cumulativeCasesBySpecimen | rateOfCumulativeDeathsBySpecimen | cumulativeDeathsBySpecimen | newDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDateRate
${"N09000004"} | ${79} | ${61} | ${0} | ${791.9} | ${1147} | ${791.9} | ${1147} | ${0} | ${null} | ${null}
${"E09000033"} | ${44} | ${42} | ${0} | ${663.9} | ${1735} | ${663.9} | ${1735} | ${0} | ${134} | ${51.3}
${"W06000002"} | ${16} | ${11} | ${0} | ${778.7} | ${970} | ${778.7} | ${970} | ${0} | ${null} | ${null}
${"S12000034"} | ${8}  | ${11} | ${0} | ${313.5} | ${819} | ${313.5} | ${819} | ${0} | ${59} | ${22.6}
`(
  "location repository returns $expectedName for $latitude $longitude",
  async ({
    localAuthorityCode,
    newCasesPublished,
    newCasesBySpecimen,
    newDeathsPublished,
    rateOfCumulativeCasesBySpecimenDate,
    cumulativeCasesBySpecimen,
    rateOfCumulativeDeathsBySpecimen,
    cumulativeDeathsBySpecimen,
    newDeaths28DaysByPublishDate,
    cumulativeDeaths28DaysByPublishDate,
    cumulativeDeaths28DaysByPublishDateRate,
  }) => {
    const result = await covidRepository.getAsync(
      {
        code: localAuthorityCode,
        name: "abc",
        geoCoordinates: { latitude: 1, longitude: 1 },
      },
      new Date(Date.UTC(2020, 9, 14))
    );
    expect(result.newCasesPublished).toEqual(newCasesPublished);
    expect(result.newCasesBySpecimen).toEqual(newCasesBySpecimen);
    expect(result.newDeathsPublished).toEqual(newDeathsPublished);
    expect(result.rateOfCumulativeCasesBySpecimenDate).toEqual(
      rateOfCumulativeCasesBySpecimenDate
    );
    expect(result.cumulativeCasesBySpecimen).toEqual(cumulativeCasesBySpecimen);
    expect(result.rateOfCumulativeDeathsBySpecimen).toEqual(
      rateOfCumulativeDeathsBySpecimen
    );
    expect(result.cumulativeDeathsBySpecimen).toEqual(
      cumulativeDeathsBySpecimen
    );
    expect(result.newDeaths28DaysByPublishDate).toEqual(
      newDeaths28DaysByPublishDate
    );
    expect(result.cumulativeDeaths28DaysByPublishDate).toEqual(
      cumulativeDeaths28DaysByPublishDate
    );
    expect(result.cumulativeDeaths28DaysByPublishDateRate).toEqual(
      cumulativeDeaths28DaysByPublishDateRate
    );
  }
);
