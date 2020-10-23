import config from "../config/next.config";
import { CovidReport, CovidReportRepository } from "./interfaces/covid";
import httpClient from "./infastructure/httpClient";
import covidReportRepository, {
  HttpClient,
} from "./repository/covidRepository";
import resilientPolicies from "../resiliency/index";

const resilientHttpClient: HttpClient = {
  getAsync: async (url: string) =>
    await resilientPolicies.execute(async () => await httpClient(url)),
};

const reportRepository: CovidReportRepository = covidReportRepository(
  config.covidApiBaseUrl,
  resilientHttpClient
);

export type { CovidReport, CovidReportRepository };
export { reportRepository as covidReportRepository };
