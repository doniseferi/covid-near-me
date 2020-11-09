import { covidRepository, builder } from "./index";
import polly from "../test/util/mockHttp";
import { Polly } from "@pollyjs/core";
import mockClient from "../test/util/mockClient";
import { httpClient } from "./infastructure";
import { CovidRepository } from "./interfaces/covid";

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
    localAuthorityCode | newCasesPublished | newCasesBySpecimen | newDeathsPublished | rateOfCumulativeCasesBySpecimenDate | cumulativeCasesBySpecimen | rateOfCumulativeDeathsBySpecimen | cumulativeDeathsBySpecimen | newDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDateRate
    ${"N09000004"}     | ${79}             | ${59}              | ${0}               | ${788.5}                            | ${1142}                   | ${788.5}                         | ${1142}                    | ${0}                         | ${null}                             | ${null}
    ${"E09000033"}     | ${44}             | ${41}              | ${0}               | ${663.9}                            | ${1735}                   | ${663.9}                         | ${1735}                    | ${0}                         | ${134}                              | ${51.3}
    ${"W06000002"}     | ${16}             | ${11}              | ${0}               | ${778.7}                            | ${970}                    | ${778.7}                         | ${970}                     | ${0}                         | ${null}                             | ${null}
    ${"S12000034"}     | ${8}              | ${9}               | ${0}               | ${312}                              | ${815}                    | ${312}                           | ${815}                     | ${0}                         | ${59}                               | ${22.6}
  `(
    "returns covid data for local authorities",
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

describe("Fallback covid repository", () => {
  let _covidRepository: CovidRepository;
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
    localAuthorityCode | newCasesPublished | newCasesBySpecimen | newDeathsPublished | rateOfCumulativeCasesBySpecimenDate | cumulativeCasesBySpecimen | rateOfCumulativeDeathsBySpecimen | cumulativeDeathsBySpecimen | newDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDateRate
    ${"N09000004"}     | ${1217}           | ${1072}            | ${0}               | ${1271.9}                           | ${24085}                  | ${1271.9}                        | ${24085}                   | ${4}                         | ${602}                              | ${31.8}
    ${"E09000033"}     | ${16132}          | ${16431}           | ${0}               | ${1071.2}                           | ${602971}                 | ${1071.2}                        | ${602971}                  | ${108}                       | ${38293}                            | ${68}
    ${"W06000002"}     | ${946}            | ${904}             | ${0}               | ${1131.8}                           | ${35683}                  | ${1131.8}                        | ${35683}                   | ${10}                        | ${1688}                             | ${53.5}
    ${"S12000034"}     | ${1429}           | ${1290}            | ${0}               | ${832.1}                            | ${45461}                  | ${832.1}                         | ${45461}                   | ${15}                        | ${2572}                             | ${47.1}
  `(
    "returns naional covid data on local authority repository timeout",
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
      const result = await _covidRepository.getAsync(
        {
          code: localAuthorityCode,
          name: "abc",
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

describe("", () => {
  let _covidRepository: CovidRepository;
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
        }).unexpectedServerError
      )
    ).build();
  });
  afterAll(() => mock.stop());
  test.each`
    localAuthorityCode | newCasesPublished | newCasesBySpecimen | newDeathsPublished | rateOfCumulativeCasesBySpecimenDate | cumulativeCasesBySpecimen | rateOfCumulativeDeathsBySpecimen | cumulativeDeathsBySpecimen | newDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDate | cumulativeDeaths28DaysByPublishDateRate
    ${"N09000004"}     | ${1217}           | ${1072}            | ${0}               | ${1271.9}                           | ${24085}                  | ${1271.9}                        | ${24085}                   | ${4}                         | ${602}                              | ${31.8}
    ${"E09000033"}     | ${16132}          | ${16431}           | ${0}               | ${1071.2}                           | ${602971}                 | ${1071.2}                        | ${602971}                  | ${108}                       | ${38293}                            | ${68}
    ${"W06000002"}     | ${946}            | ${904}             | ${0}               | ${1131.8}                           | ${35683}                  | ${1131.8}                        | ${35683}                   | ${10}                        | ${1688}                             | ${53.5}
    ${"S12000034"}     | ${1429}           | ${1290}            | ${0}               | ${832.1}                            | ${45461}                  | ${832.1}                         | ${45461}                   | ${15}                        | ${2572}                             | ${47.1}
  `(
    "returns naional covid data on local authority repository error",
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
      const result = await _covidRepository.getAsync(
        {
          code: localAuthorityCode,
          name: "abc",
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
