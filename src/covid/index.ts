import axios from "axios";
export default () => {
  const getAsync = async (localAuthority: string, iso8601Date: string) =>
    await axios
      .get(
        `https://api.coronavirus.data.gov.uk/v1/data?filters={date=${iso8601Date};areaType=utla;areaName=${localAuthority}&structure={"areaName":"areaName","areaCode":"areaCode","date":"date","hash":"hash","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}`
      )
      .then(async (res) => {
        const body = await res.data.data[0];
        const result = {
          date: body.date,
          newCasesByPublishDate: body.newCasesByPublishDate,
          cumCasesByPublishDate: body.cumCasesByPublishDate,
          newDeaths28DaysByPublishDate: body.newDeaths28DaysByPublishDate,
          cumDeaths28DaysByPublishDate: body.cumDeaths28DaysByPublishDate,
        };
        return result;
      })
      .catch(async (err) => {
        console.log(await err);
        return err;
      });

  return {
    getAsync: async (localAuthority: string, iso8601Date: string) =>
      getAsync(localAuthority, iso8601Date),
  };
};
