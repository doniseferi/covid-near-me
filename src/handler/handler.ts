import {
  CovidStatistics,
  NationalCovidStatistics,
  StatisticsRepository,
} from "../covid";
import {
  Location,
  GeoCoordinates,
  LocalAuthorityRepository,
} from "../location";

export interface Covid {
  location: Location;
  statistics: CovidStatistics | NationalCovidStatistics;
}

export interface CovidQueryHandler {
  handleAsync: (geoCoordinates: GeoCoordinates, date: Date) => Promise<Covid>;
}

export default (
  localAuthorityRepository: LocalAuthorityRepository,
  covidRepository: StatisticsRepository
): CovidQueryHandler => {
  const handle = async (
    geoCoordinates: GeoCoordinates,
    date: Date
  ): Promise<Covid> => {
    const localAuthority = await localAuthorityRepository.getAsync(
      geoCoordinates
    );
    const covidStatistics = await covidRepository.getAsync(
      localAuthority,
      date
    );
    return {
      location: localAuthority,
      statistics: covidStatistics,
    };
  };
  return {
    handleAsync: async (geoCoordinates: GeoCoordinates, date: Date) =>
      await handle(geoCoordinates, date),
  };
};
