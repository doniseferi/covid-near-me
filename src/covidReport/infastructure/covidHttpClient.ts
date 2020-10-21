import axios from "axios";
import { HttpClient } from "../repository/covidReportRepository";
import resilientPolicies from "../../reciliencey/index";

export default (): HttpClient => {
  const getAsync = async <T>(url: string): Promise<T> =>
    url
      ? await resilientPolicies.execute(async () => {
          const { data } = await axios.get<T>(url);
          return data;
        })
      : (() => {
          throw new ReferenceError(
            "The Url is null or empty. Please provide a Url"
          );
        })();

  return {
    getAsync: async (url: string) => await getAsync(url),
  };
};
