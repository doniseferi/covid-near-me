import polly from "../test/util/mockHttp";
import { Polly } from "@pollyjs/core";
import localInformationQueryHandler from "./index";

describe("Covid Repository", () => {
  let mock: Polly;
  beforeAll(
    () =>
      (mock = polly({
        name: "handler",
        mode: "replay",
      }))
  );
  afterAll(() => mock.stop());
  test.concurrent.each`
    latitude      | longitude     | newCasesPublished | newCasesBySpecimen | newDeathsPublished | rateOfCumulativeCasesBySpecimenDate | cumulativeCasesBySpecimen | rateOfCumulativeDeathsBySpecimen | cumulativeDeathsBySpecimen | newDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDateRate
    ${55.2408073} | ${-6.5115552} | ${79}             | ${59}              | ${0}               | ${786.4}                            | ${1139}                   | ${786.4}                         | ${1139}                    | ${0}                         | ${null}                             | ${null}
    ${51.500729}  | ${-0.124625}  | ${44}             | ${41}              | ${0}               | ${664.7}                            | ${1737}                   | ${664.7}                         | ${1737}                    | ${0}                         | ${134}                              | ${51.3}
    ${53.0684881} | ${-4.0764504} | ${16}             | ${11}              | ${0}               | ${778.7}                            | ${970}                    | ${778.7}                         | ${970}                     | ${0}                         | ${null}                             | ${null}
    ${56.9459695} | ${-2.2110162} | ${8}              | ${9}               | ${0}               | ${312}                              | ${815}                    | ${312}                           | ${815}                     | ${0}                         | ${59}                               | ${22.6}
  `(
    "returns covid data for local authorities",
    async ({
      latitude,
      longitude,
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
      const { covid } = await localInformationQueryHandler.handleAsync(
        { latitude, longitude },
        new Date(Date.UTC(2020, 9, 14))
      );

      expect(covid.newCasesPublished).toEqual(newCasesPublished);
      expect(covid.newCasesBySpecimen).toEqual(newCasesBySpecimen);
      expect(covid.newDeathsPublished).toEqual(newDeathsPublished);
      expect(covid.rateOfCumulativeCasesBySpecimenDate).toEqual(
        rateOfCumulativeCasesBySpecimenDate
      );
      expect(covid.cumulativeCasesBySpecimen).toEqual(
        cumulativeCasesBySpecimen
      );
      expect(covid.rateOfCumulativeDeathsBySpecimen).toEqual(
        rateOfCumulativeDeathsBySpecimen
      );
      expect(covid.cumulativeDeathsBySpecimen).toEqual(
        cumulativeDeathsBySpecimen
      );
      expect(covid.newDeaths28DaysByPublishDate).toEqual(
        newDeaths28DaysByPublishDate
      );
      expect(covid.cumulativeDeaths28DaysByPublishDate).toEqual(
        cumulativeDeaths28DaysByPublishDate
      );
      expect(covid.cumulativeDeaths28DaysByPublishDateRate).toEqual(
        cumulativeDeaths28DaysByPublishDateRate
      );
    }
  );
});
