import { covidRepository } from "../covid";
import { locationRepository } from "../location";
import handler from "./handler";

const localInformationQueryHandler = {
  handleAsync: handler(locationRepository, covidRepository).handleAsync,
};

export default localInformationQueryHandler;
