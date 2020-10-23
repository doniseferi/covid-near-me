import config from "../config/next.config";
import { CovidReport, CovidReportRepository } from "./interfaces/covid";
import httpClient from "./infastructure/httpClient";
import covidRepository, { HttpClient } from "./repository/covidRepository";
import resilientPolicies from "../resiliency/index";

const resilientHttpClient: HttpClient = {
  getAsync: async (url: string) =>
    await resilientPolicies.execute(async () => await httpClient(url)),
};

const reportRepository: CovidReportRepository = covidRepository(
  config.covidApiBaseUrl,
  resilientHttpClient
);

export type { CovidReport, CovidReportRepository };
export { reportRepository as covidRepository };
