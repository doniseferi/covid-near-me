import axios from "axios";
import { CovidReport } from "../index";
import { HttpClient } from "../repository/covidReportRepository";

export default (): HttpClient => {
  const getAsync = async <T>(url: string): Promise<T> => {
    if (!url) {
      throw new ReferenceError(
        "The Url is null or empty. Please provide a Url"
      );
    }
    const { data } = await axios.get<T>(url);
    return data;
  };

  return {
    getAsync: async (url: string) => await getAsync(url),
  };
};

