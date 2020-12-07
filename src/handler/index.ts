import { covidRepository } from "../covid";
import { locationRepository } from "../location";
import handler from "./handler";
import { LocalCovidStatistics } from "./handler";

const covidStatsticsQueryHandler = {
  handleAsync: handler(locationRepository, covidRepository).handleAsync,
};

export type { LocalCovidStatistics };
export default covidStatsticsQueryHandler;
