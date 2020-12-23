import { HttpResponseMessage } from "../../covid/infastructure/httpClient";

export interface MockConfig {
  delayInMilliseoconds: number;
}
export default (mockConfig: MockConfig) => {
  const sleep = (delayInMilliseconds: number) => {
    const e = new Date().getTime() + delayInMilliseconds;
    while (new Date().getTime() <= e) {
      ("snooze");
    }
  };
  const timeout = <T>(url: string): Promise<HttpResponseMessage<T>> => {
    url;
    sleep(mockConfig.delayInMilliseoconds);
    return Promise.resolve({ data: ({} as unknown) as T, status: 200 });
  };
  const unexpectedServerError = <T>(
    url: string
  ): Promise<HttpResponseMessage<T>> => {
    return Promise.reject({ status: 500 });
  };

  return {
    timeout: <T>(url: string) => timeout<T>(url),
    unexpectedServerError: <T>(url: string) => unexpectedServerError<T>(url),
  };
};
