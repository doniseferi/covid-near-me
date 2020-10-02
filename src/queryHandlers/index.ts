import { getUKLocalAuthorityQueryHandlerAsyncFactory } from "./getUKLocalAuthorityQueryHandlerFactory";
import ukLocalAuthorityGeoBoundariesRepository from "../data/index";

const getUKLocalAuthorityQueryHandlerAsync = getUKLocalAuthorityQueryHandlerAsyncFactory(
  ukLocalAuthorityGeoBoundariesRepository
);

export {
  getUKLocalAuthorityQueryHandlerAsyncFactory,
  getUKLocalAuthorityQueryHandlerAsync,
};
