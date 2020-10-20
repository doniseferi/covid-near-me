import config from "../config/next.config";
import { CovidReport, CovidReportRepository } from "./domain/covidReport";
import httpClient from "./infastructure/axiosClient";
import covidReportRepository from "./repository/covidReportRepository";

const reportRepository = covidReportRepository(
  config.covidApiBaseUrl,
  httpClient()
);

export type { CovidReport, CovidReportRepository };
export { reportRepository as covidReportRepository };
