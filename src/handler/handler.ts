import {
  CovidRepository,
  CovidStatistics,
  NationalCovidStatistics,
} from "../covid";
import {
  Location,
  GeoCoordinates,
  LocalAuthorityRepository,
} from "../location";

export interface LocalCovidStatistics {
  location: Location;
  statistics: CovidStatistics;
}

export interface NationalCovidStastics {
  location: Location;
  statistics: NationalCovidStatistics;
}

export interface LocalCovidStatisticsQueryHandler {
  handleAsync: (
    geoCoordinates: GeoCoordinates,
    date: Date
  ) => Promise<LocalCovidStatistics>;
}
export interface NationalCovidStatisticsQueryHandler {
  handleAsync: (
    geoCoordinates: GeoCoordinates,
    date: Date
  ) => Promise<NationalCovidStastics>;
}

export default (
  localAuthorityRepository: LocalAuthorityRepository,
  covidRepository: CovidRepository
): LocalCovidStatisticsQueryHandler | NationalCovidStatisticsQueryHandler => {
  const handle = async (
    geoCoordinates: GeoCoordinates,
    date: Date
  ): Promise<LocalCovidStatistics> => {
    const localAuthority = await localAuthorityRepository.getAsync(
      geoCoordinates
    );
    const covidStatistics = await covidRepository.getAsync(localAuthority, date);
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
