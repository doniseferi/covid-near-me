import axios from "axios";
import polly from "polly-js";
import { HttpClient } from "../repository/covidReportRepository";

export default (): HttpClient => {
  const getAsync = async <T>(url: string): Promise<T> =>
    url
      ? polly()
          .waitAndRetry(2)
          .executeForPromise(async () => {
            const rsp = await axios.get<T>(url, { timeout: 10_000 });
            if (rsp.status === 200) {
              return rsp.data;
            }
            return Promise.reject(rsp);
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
