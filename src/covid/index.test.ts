import covidRepository from "./index";
test.concurrent.each`
   localAuthority | newCasesByPublishDate| cumCasesByPublishDate| newDeaths28DaysByPublishDate | cumDeaths28DaysByPublishDate
   ${"Westminster"} | ${44} | ${null} | ${0} | ${134}
   ${"Aberdeenshire"} |${8} | ${800} | ${0} | ${59}
   ${"Gwynedd"} | ${0} | ${951} | ${0} | ${null}
   ${"Causeway Coast and Glens"} | ${79} | ${1078} |${0} | ${null}
`(
  "location repository returns $expectedName for $latitude $longitude",
  async ({
    localAuthority,
    newCasesByPublishDate,
    cumCasesByPublishDate,
    newDeaths28DaysByPublishDate,
    cumDeaths28DaysByPublishDate,
  }) => {
    const repo = covidRepository();
    const result = await repo.getAsync(
      `${localAuthority}`,
      new Date(Date.UTC(2020, 9, 14))
    );
    expect(result.date).toEqual("2020-10-14");
    expect(result.newCasesByPublishDate).toEqual(newCasesByPublishDate);
    expect(result.cumCasesByPublishDate).toEqual(cumCasesByPublishDate);
    expect(result.newDeaths28DaysByPublishDate).toEqual(
      newDeaths28DaysByPublishDate
    );
    expect(result.cumDeaths28DaysByPublishDate).toEqual(
      cumDeaths28DaysByPublishDate
    );
  }
);
