import axios from "axios";

export default async <T>(url: string): Promise<T> => {
  if (!url) {
    throw new ReferenceError("The Url is null or empty. Please provide a Url");
  }

  const { data } = await axios.get<T>(url);
  return data;
};
