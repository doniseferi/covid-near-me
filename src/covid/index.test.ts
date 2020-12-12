import polly from "../test/util/mockHttp";
import { Polly } from "@pollyjs/core";
import mockClient from "../test/util/mockClient";
import { httpClient } from "./infastructure";
import {
  builder,
  covidRepository,
  NationalCovidStatistics,
  StatisticsRepository,
} from "./index";

describe("Covid Repository", () => {
  let mock: Polly;
  beforeAll(
    () =>
      (mock = polly({
        name: "covid",
        mode: "replay",
      }))
  );
  afterAll(() => mock.stop());
  test.each`
    localAuthorityCode | newCasesByPublishDate | cumCasesByPublishDate | cumCasesBySpecimenDateRate | newCasesBySpecimenDate | cumCasesBySpecimenDate | newDeaths28DaysByPublishDate | cumDeaths28DaysByPublishDate | cumDeaths28DaysByPublishDateRate | newDeaths28DaysByDeathDate | cumDeaths28DaysByDeathDate | cumDeaths28DaysByDeathDateRate
    ${"E09000033"}     | ${44}                 | ${null}               | ${659.4}                   | ${30}                  | ${1723}                | ${0}                         | ${134}                       | ${51.3}                          | ${2}                       | ${136}                     | ${52}
    ${"N09000004"}     | ${79}                 | ${1078}               | ${783.6}                   | ${59}                  | ${1135}                | ${0}                         | ${39}                        | ${26.9}                          | ${0}                       | ${39}                      | ${26.9}
    ${"S12000034"}     | ${8}                  | ${800}                | ${313.2}                   | ${9}                   | ${818}                 | ${0}                         | ${59}                        | ${22.6}                          | ${0}                       | ${59}                      | ${22.6}
    ${"W06000002"}     | ${16}                 | ${921}                | ${778.7}                   | ${11}                  | ${970}                 | ${0}                         | ${null}                      | ${null}                          | ${null}                    | ${null}                    | ${null}
  `(
    "returns covid data for local authorities",
    async ({
      localAuthorityCode,
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
      const result = await covidRepository.getAsync(
        {
          code: localAuthorityCode,
          name: "abc",
        },
        new Date(Date.UTC(2020, 9, 14))
      );
      expect(result.newCasesByPublishDate).toEqual(newCasesByPublishDate);
      expect(result.cumCasesByPublishDate).toEqual(cumCasesByPublishDate);
      expect(result.cumCasesBySpecimenDateRate).toEqual(
        cumCasesBySpecimenDateRate
      );
      expect(result.newCasesBySpecimenDate).toEqual(newCasesBySpecimenDate);
      expect(result.cumCasesBySpecimenDate).toEqual(cumCasesBySpecimenDate);
      expect(result.newDeaths28DaysByPublishDate).toEqual(
        newDeaths28DaysByPublishDate
      );
      expect(result.cumDeaths28DaysByPublishDate).toEqual(
        cumDeaths28DaysByPublishDate
      );
      expect(result.cumDeaths28DaysByPublishDateRate).toEqual(
        cumDeaths28DaysByPublishDateRate
      );
      expect(result.newDeaths28DaysByDeathDate).toEqual(
        newDeaths28DaysByDeathDate
      );
      expect(result.cumDeaths28DaysByDeathDate).toEqual(
        cumDeaths28DaysByDeathDate
      );
      expect(result.cumDeaths28DaysByDeathDateRate).toEqual(
        cumDeaths28DaysByDeathDateRate
      );
    }
  );
});

describe("Fallback covid repository", () => {
  let _covidRepository: StatisticsRepository;
  let mock: Polly;
  beforeAll(() => {
    const testResiliencyConfig = {
      timeoutInMilliseconds: 1000,
      backOffPeriodInMilliseconds: 1000,
      errorThresholdPercentage: 50,
    };
    mock = polly({
      name: "fallback",
      mode: "replay",
    });
    _covidRepository = builder(
      testResiliencyConfig,
      httpClient(
        mockClient({
          delayInMilliseoconds: testResiliencyConfig.timeoutInMilliseconds + 1,
        }).timeout
      )
    ).build();
  });
  afterAll(() => mock.stop());
  test.each`
    localAuthorityCode | newCasesByPublishDate | cumCasesByPublishDate | cumCasesBySpecimenDateRate | newCasesBySpecimenDate | cumCasesBySpecimenDate | newDeaths28DaysByPublishDate | cumDeaths28DaysByPublishDate | cumDeaths28DaysByPublishDateRate | newDeaths28DaysByDeathDate | cumDeaths28DaysByDeathDate | cumDeaths28DaysByDeathDateRate | newPillarOneTestsByPublishDate | cumPillarOneTestsByPublishDate | newPillarTwoTestsByPublishDate | cumPillarTwoTestsByPublishDate | newPillarThreeTestsByPublishDate | cumPillarThreeTestsByPublishDate | newAdmissions | cumAdmissions | cumTestsByPublishDate | newTestsByPublishDate | covidOccupiedMVBeds | hospitalCases
    ${"S92000003"}     | ${1429}               | ${42685}              | ${832.1}                   | ${1290}                | ${45461}               | ${15}                        | ${2572}                      | ${47.1}                          | ${6}                       | ${2609}                    | ${47.8}                        | ${8113}                        | ${763336}                      | ${9972}                        | ${1151037}                     | ${null}                          | ${null}                          | ${112}        | ${7718}       | ${1914373}            | ${18085}              | ${49}               | ${570}
    ${"N92000002"}     | ${1217}               | ${23115}              | ${1268.1}                  | ${1065}                | ${24014}               | ${4}                         | ${602}                       | ${31.8}                          | ${2}                       | ${604}                     | ${31.9}                        | ${2010}                        | ${243019}                      | ${6257}                        | ${382182}                      | ${null}                          | ${null}                          | ${37}         | ${2223}       | ${625201}             | ${8267}               | ${17}               | ${316}
    ${"E92000001"}     | ${16132}              | ${556528}             | ${1071.6}                  | ${16441}               | ${603190}              | ${108}                       | ${38293}                     | ${68}                            | ${99}                      | ${38607}                   | ${68.6}                        | ${66513}                       | ${7397365}                     | ${172121}                      | ${13563348}                    | ${3891}                          | ${1736207}                       | ${706}        | ${126766}     | ${22696920}           | ${242525}             | ${468}              | ${4156}
    ${"W92000004"}     | ${946}                | ${32316}              | ${1131.7}                  | ${904}                 | ${35682}               | ${10}                        | ${1688}                      | ${53.5}                          | ${7}                       | ${1720}                    | ${54.6}                        | ${3445}                        | ${466485}                      | ${5363}                        | ${511111}                      | ${null}                          | ${null}                          | ${123}        | ${16948}      | ${977596}             | ${8808}               | ${29}               | ${384}
  `(
    "returns naional covid data on local authority repository timeout",
    async ({
      localAuthorityCode,
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
      newPillarOneTestsByPublishDate,
      cumPillarOneTestsByPublishDate,
      newPillarTwoTestsByPublishDate,
      cumPillarTwoTestsByPublishDate,
      newPillarThreeTestsByPublishDate,
      cumPillarThreeTestsByPublishDate,
      newAdmissions,
      cumAdmissions,
      cumTestsByPublishDate,
      newTestsByPublishDate,
      covidOccupiedMVBeds,
      hospitalCases,
    }) => {
      const result = (await _covidRepository.getAsync(
        {
          code: localAuthorityCode,
          name: "abc",
        },
        new Date(Date.UTC(2020, 9, 14))
      )) as NationalCovidStatistics;
      expect(result.newCasesByPublishDate).toEqual(newCasesByPublishDate);
      expect(result.cumCasesByPublishDate).toEqual(cumCasesByPublishDate);
      expect(result.cumCasesBySpecimenDateRate).toEqual(
        cumCasesBySpecimenDateRate
      );
      expect(result.newCasesBySpecimenDate).toEqual(newCasesBySpecimenDate);
      expect(result.cumCasesBySpecimenDate).toEqual(cumCasesBySpecimenDate);
      expect(result.newDeaths28DaysByPublishDate).toEqual(
        newDeaths28DaysByPublishDate
      );
      expect(result.cumDeaths28DaysByPublishDate).toEqual(
        cumDeaths28DaysByPublishDate
      );
      expect(result.cumDeaths28DaysByPublishDateRate).toEqual(
        cumDeaths28DaysByPublishDateRate
      );
      expect(result.newDeaths28DaysByDeathDate).toEqual(
        newDeaths28DaysByDeathDate
      );
      expect(result.cumDeaths28DaysByDeathDate).toEqual(
        cumDeaths28DaysByDeathDate
      );
      expect(result.cumDeaths28DaysByDeathDateRate).toEqual(
        cumDeaths28DaysByDeathDateRate
      );
      expect(result.newPillarOneTestsByPublishDate).toEqual(
        newPillarOneTestsByPublishDate
      );
      expect(result.cumPillarOneTestsByPublishDate).toEqual(
        cumPillarOneTestsByPublishDate
      );
      expect(result.newPillarTwoTestsByPublishDate).toEqual(
        newPillarTwoTestsByPublishDate
      );
      expect(result.cumPillarTwoTestsByPublishDate).toEqual(
        cumPillarTwoTestsByPublishDate
      );
      expect(result.newPillarThreeTestsByPublishDate).toEqual(
        newPillarThreeTestsByPublishDate
      );
      expect(result.cumPillarThreeTestsByPublishDate).toEqual(
        cumPillarThreeTestsByPublishDate
      );
      expect(result.newAdmissions).toEqual(newAdmissions);
      expect(result.cumAdmissions).toEqual(cumAdmissions);
      expect(result.cumTestsByPublishDate).toEqual(cumTestsByPublishDate);
      expect(result.newTestsByPublishDate).toEqual(newTestsByPublishDate);
      expect(result.covidOccupiedMVBeds).toEqual(covidOccupiedMVBeds);
      expect(result.hospitalCases).toEqual(hospitalCases);
    }
  );
});
