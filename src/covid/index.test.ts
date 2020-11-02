import { covidRepository } from "./index";
import { stubHttp } from "../test/util/httpStub";

describe("Covid repository", async () => {
  const polly = stubHttp("covid");
  beforeAll(() => polly, 0);
  afterAll(async () => await polly.stop());
  test.concurrent.each`
    localAuthorityCode | newCasesPublished | newCasesBySpecimen | newDeathsPublished | rateOfCumulativeCasesBySpecimenDate | cumulativeCasesBySpecimen | rateOfCumulativeDeathsBySpecimen | cumulativeDeathsBySpecimen | newDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDateRate
    ${"N09000004"}     | ${79}             | ${59}              | ${0}               | ${788.5}                            | ${1142}                   | ${788.5}                         | ${1142}                    | ${0}                         | ${null}                             | ${null}
    ${"E09000033"}     | ${44}             | ${41}              | ${0}               | ${663.9}                            | ${1735}                   | ${663.9}                         | ${1735}                    | ${0}                         | ${134}                              | ${51.3}
    ${"W06000002"}     | ${16}             | ${11}              | ${0}               | ${778.7}                            | ${970}                    | ${778.7}                         | ${970}                     | ${0}                         | ${null}                             | ${null}
    ${"S12000034"}     | ${8}              | ${9}              | ${0}               | ${312}                            | ${815}                    | ${312}                         | ${815}                     | ${0}                         | ${59}                               | ${22.6}
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
      expect(result.cumulativeCasesBySpecimen).toEqual(
        cumulativeCasesBySpecimen
      );
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
});
