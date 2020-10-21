import { GeoCoordinates } from "../valueTypes/geoCoordinates";

interface LocalAuthority {
  name: string;
  code: string;
}

export interface Location extends LocalAuthority {
  geoCoordinates: GeoCoordinates;
}

export interface LocalAuthorityRepository {
  getAsync: (geoCoordinates: GeoCoordinates) => Promise<Location>;
}
