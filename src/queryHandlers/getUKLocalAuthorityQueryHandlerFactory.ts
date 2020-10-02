import {
  UKLocalAuthorityGeoBoundariesRepository,
  UKLocalAuthority,
} from "../data/index";

/**
 * @template UKLocalAuthorityRepository A repository that given a latitude and longitude returns a UK local authoritys `UKLocalAuthorityRepository`.
 * @returns A method that given that given a latitude and longitude returns a `UKLocalAuthority`
 */
const getUKLocalAuthorityQueryHandlerAsyncFactory = (
  ukLocalAuthorityRepository: UKLocalAuthorityGeoBoundariesRepository
): ((latitude: number, longitude: number) => Promise<UKLocalAuthority>) =>
  ukLocalAuthorityRepository !== null &&
  ukLocalAuthorityRepository !== undefined
    ? ukLocalAuthorityRepository.getAsync
    : (_) => {
        throw ReferenceError(
          "Unsatisfied Dependency Error. Please provide an object" +
            "that given any coordinates within the UK will return the local authority" +
            " name and code the coordinates fall under."
        );
      };

export { getUKLocalAuthorityQueryHandlerAsyncFactory };
