import { covidRepository } from "../covid";
import { locationRepository } from "../location";
import handler from "./handler";
import type { LocalInformation } from "./handler";

const localInformationQueryHandler = {
  handleAsync: handler(locationRepository, covidRepository).handleAsync,
};

export type { LocalInformation };
export default localInformationQueryHandler;
