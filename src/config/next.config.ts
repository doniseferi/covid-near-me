export default {
  connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}?timeout=${process.env.POSTGRES_COMMAND_TIMEOUT}`,
  covidApiUrl: (localAuthority: string, date: Date) =>
    `${
      process.env.COVID_API_BASE_URL
    }/v1/data?filters={date=${date
      .toISOString()
      .substring(
        0,
        10
      )};areaType=utla;areaName=${localAuthority}&structure={"areaName":"areaName","areaCode":"areaCode","date":"date","hash":"hash","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}`,
};
