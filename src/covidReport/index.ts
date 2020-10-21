import config from "../config/next.config";
import { CovidReport, CovidReportRepository } from "./interfaces/covidReport";
import covidHttpClient from "./infastructure/covidHttpClient";
import covidReportRepository from "./repository/covidReportRepository";

const reportRepository = covidReportRepository(
  config.covidApiBaseUrl,
  covidHttpClient()
);

export type { CovidReport, CovidReportRepository };
export { reportRepository as covidReportRepository };
