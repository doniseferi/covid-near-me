import { HttpClient } from "../repository/covidRepository";

export interface HttpResponseMessage<T> {
  status: number;
  data: T;
}

const httpClient = (
  getAsync: <T>(url: string) => Promise<HttpResponseMessage<T>>
): HttpClient => {
  const get = async <T>(url: string): Promise<T> => {
    if (!url) {
      throw new ReferenceError(
        "The Url is null or empty. Please provide a Url"
      );
    }

    const { data } = await getAsync<T>(url);
    return data;
  };

  return { getAsync: async (url: string) => await get(url) };
};

export default httpClient;
