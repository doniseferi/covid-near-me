type UKLocalAuthority = {
  Name: string;
  Code: string;
};

interface UKLocalAuthorityQuery {
  latitude: number;
  longitude: number;
}

interface UKLocalAuthorityRepository {
  getAsync: (query: UKLocalAuthorityQuery) => UKLocalAuthority;
}

const getUKLocalAuthorityQueryHandlerAsyncFactory = (
  ukLocalAuthorityRepository: UKLocalAuthorityRepository
) => {
  return !ukLocalAuthorityRepository
    ? ukLocalAuthorityRepository.getAsync
    : () => {
        throw ReferenceError(
          "Unsatisfied Dependency Error. Please provide an object" +
            "that given any coordinates within the UK will return the local authority" +
            " name and code the coordinates fall under."
        );
      };
};

export { getUKLocalAuthorityQueryHandlerAsyncFactory };
