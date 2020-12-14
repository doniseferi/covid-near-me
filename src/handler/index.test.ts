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
    latitude      | longitude     | newCasesByPublishDate | cumCasesByPublishDate | cumCasesBySpecimenDateRate | newCasesBySpecimenDate | cumCasesBySpecimenDate | newDeaths28DaysByPublishDate | cumDeaths28DaysByPublishDate | cumDeaths28DaysByPublishDateRate | newDeaths28DaysByDeathDate | cumDeaths28DaysByDeathDate | cumDeaths28DaysByDeathDateRate
    ${55.2408073} | ${-6.5115552} | ${79}                 | ${1078}               | ${782.9}                   | ${59}                  | ${1134}                | ${0}                         | ${39}                        | ${26.9}                          | ${0}                       | ${39}                      | ${26.9}
    ${51.500729}  | ${-0.124625}  | ${44}                 | ${null}               | ${660.5}                   | ${30}                  | ${1726}                | ${0}                         | ${134}                       | ${51.3}                          | ${2}                       | ${136}                     | ${52}
    ${53.0684881} | ${-4.0764504} | ${16}                 | ${921}                | ${778.7}                   | ${11}                  | ${970}                 | ${0}                         | ${null}                      | ${null}                          | ${null}                    | ${null}                    | ${null}
    ${56.9459695} | ${-2.2110162} | ${8}                  | ${800}                | ${313.2}                   | ${9}                   | ${818}                 | ${0}                         | ${59}                        | ${22.6}                          | ${0}                       | ${59}                      | ${22.6}
    `(
    "returns covid data for local authorities",
    async ({
      latitude,
      longitude,
      newCasesByPublishDate,
      cumCasesByPublishDate,
      cumCasesBySpecimenDateRate,
      newCasesBySpecimenDate,
      cumCasesBySpecimenDate,
      newDeaths28DaysByPublishDate,
      cumDeaths28DaysByPublishDate,
      cumDeaths28DaysByPublishDateRate,
      newDeaths28DaysByDeathDate,
      cumDeaths28DaysByDeathDate,
      cumDeaths28DaysByDeathDateRate,
    }) => {
      const { statistics } = await localInformationQueryHandler.handleAsync(
        { latitude, longitude },
        new Date(Date.UTC(2020, 9, 14))
      );
      expect(statistics.newCasesByPublishDate).toEqual(newCasesByPublishDate);
      expect(statistics.cumCasesByPublishDate).toEqual(cumCasesByPublishDate);
      expect(statistics.cumCasesBySpecimenDateRate).toEqual(
        cumCasesBySpecimenDateRate
      );
      expect(statistics.newCasesBySpecimenDate).toEqual(newCasesBySpecimenDate);
      expect(statistics.cumCasesBySpecimenDate).toEqual(cumCasesBySpecimenDate);
      expect(statistics.newDeaths28DaysByPublishDate).toEqual(
        newDeaths28DaysByPublishDate
      );
      expect(statistics.cumDeaths28DaysByPublishDate).toEqual(
        cumDeaths28DaysByPublishDate
      );
      expect(statistics.cumDeaths28DaysByPublishDateRate).toEqual(
        cumDeaths28DaysByPublishDateRate
      );
      expect(statistics.newDeaths28DaysByDeathDate).toEqual(
        newDeaths28DaysByDeathDate
      );
      expect(statistics.cumDeaths28DaysByDeathDate).toEqual(
        cumDeaths28DaysByDeathDate
      );
      expect(statistics.cumDeaths28DaysByDeathDateRate).toEqual(
        cumDeaths28DaysByDeathDateRate
      );
    }
  );
});
