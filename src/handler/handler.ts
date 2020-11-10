import { CovidRepository, Covid } from "../covid";
import {
  Location,
  GeoCoordinates,
  LocalAuthorityRepository,
} from "../location";

interface LocalInformation {
  location: Location;
  covid: Covid;
}

interface LocalInformationQueryHandler {
  handleAsync: (
    geoCoordinates: GeoCoordinates,
    date: Date
  ) => Promise<LocalInformation>;
}

export default (
  localAuthorityRepository: LocalAuthorityRepository,
  covidRepository: CovidRepository
): LocalInformationQueryHandler => {
  const handle = async (
    geoCoordinates: GeoCoordinates,
    date: Date
  ): Promise<LocalInformation> => {
    const localAuthority = await localAuthorityRepository.getAsync(
      geoCoordinates
    );
    const covid = await covidRepository.getAsync(localAuthority, date);
    return {
      location: localAuthority,
      covid,
    };
  };
  return {
    handleAsync: async (geoCoordinates: GeoCoordinates, date: Date) =>
      await handle(geoCoordinates, date),
  };
};
