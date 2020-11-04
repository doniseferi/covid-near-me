import { HttpClient } from "../repository/covidRepository";

const httpClient = (
  getAsync: <T>(url: string) => Promise<{ status: number; data: T }>
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
