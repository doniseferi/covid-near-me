import { covidRepository } from "../covid";
import { locationRepository } from "../location";
import handler from "./handler";
import { Covid } from "./handler";

const covidStatsticsQueryHandler = {
  handleAsync: handler(locationRepository, covidRepository).handleAsync,
};

export type { Covid };
export default covidStatsticsQueryHandler;
