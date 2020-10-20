import { covidReportRepository } from "./index";

test.concurrent.each`
localAuthorityCode | newCasesPublished | newCasesBySpecimen | newDeathsPublished | rateOfCumulativeCasesBySpecimenDate | cumulativeCasesBySpecimen | rateOfCumulativeDeathsBySpecimen | cumulativeDeathsBySpecimen | newDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDateRate
${"N09000004"} | ${79} | ${62} | ${0} | ${793.3} | ${1149} | ${793.3} | ${1149} | ${0} | ${null} | ${null}
${"E09000033"} | ${44} | ${43} | ${0} | ${664.7} | ${1737} | ${664.7} | ${1737} | ${0} | ${134} | ${51.3}
${"W06000002"} | ${16} | ${11} | ${0} | ${777.1} | ${968} | ${777.1} | ${968} | ${0} | ${null} | ${null}
${"S12000034"} | ${8}  | ${11} | ${0} | ${313.2} | ${818} | ${313.2} | ${818} | ${0} | ${59} | ${22.6}
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
    const result = await covidReportRepository.getAsync(
      {
        code: localAuthorityCode,
        name: "abc",
        geoCoordinates: { latitude: 1, longitude: 1 },
      },
      new Date(Date.UTC(2020, 9, 14))
    );
    expect(result.newCasesPublished).toEqual(newCasesPublished),
      expect(result.newCasesBySpecimen).toEqual(newCasesBySpecimen),
      expect(result.newDeathsPublished).toEqual(newDeathsPublished),
      expect(result.rateOfCumulativeCasesBySpecimenDate).toEqual(
        rateOfCumulativeCasesBySpecimenDate
      ),
      expect(result.cumulativeCasesBySpecimen).toEqual(
        cumulativeCasesBySpecimen
      ),
      expect(result.rateOfCumulativeDeathsBySpecimen).toEqual(
        rateOfCumulativeDeathsBySpecimen
      ),
      expect(result.cumulativeDeathsBySpecimen).toEqual(
        cumulativeDeathsBySpecimen
      ),
      expect(result.newDeaths28DaysByPublishDate).toEqual(
        newDeaths28DaysByPublishDate
      ),
      expect(result.cumulativeDeaths28DaysByPublishDate).toEqual(
        cumulativeDeaths28DaysByPublishDate
      ),
      expect(result.cumulativeDeaths28DaysByPublishDateRate).toEqual(
        cumulativeDeaths28DaysByPublishDateRate
      );
  }
);
