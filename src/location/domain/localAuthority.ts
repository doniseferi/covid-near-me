import { GeoCoordinates } from "../valueTypes/geoCoordinates";

type LocalAuthority = {
  name: string;
  code: string;
};

export type Location = {
  geoCoordinates: GeoCoordinates;
} & LocalAuthority;

export interface LocalAuthorityRepository {
  getAsync: (geoCoordinates: GeoCoordinates) => Promise<Location>;
}
