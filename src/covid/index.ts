import axios from "axios";
import config from "../config/next.config";

export default () => {
  const getAsync = async (localAuthority: string, date: Date) =>
    await axios
      .get(config.covidApiUrl(localAuthority, date))
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
    getAsync: async (localAuthority: string, date: Date) =>
      await getAsync(localAuthority, date),
  };
};
