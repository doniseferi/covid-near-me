import { covidRepository } from "../covid";
import { locationRepository } from "../location";
import handler, { LocalInformation } from "./handler";

const localInformationQueryHandler = {
  handleAsync: handler(locationRepository, covidRepository).handleAsync,
};

export type { LocalInformation };
export default localInformationQueryHandler;
