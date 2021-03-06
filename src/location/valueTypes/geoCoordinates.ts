export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

const maximumLatitude = 60.84;
const minimumLatitude = 49.9;
const maximumLongitude = 1.77;
const minimumLongitude = -8.62;

const throwRangeError = (value: number, type: "latitude" | "longitude") =>
  (() => {
    throw new RangeError(
      `The supplied ${type} value of ${value} does not fall within the range possible in the UK. The UK has a latitude range of ${
        type === "latitude"
          ? `${minimumLatitude}-${minimumLatitude}`
          : `${minimumLongitude}-${maximumLongitude}`
      }`
    );
  })();

const throwLatitudeError = (value: number) =>
  throwRangeError(value, "latitude");

const throwLongitudeError = (value: number) =>
  throwRangeError(value, "longitude");

const geoCoordinates = (latitude: number, longitude: number): GeoCoordinates =>
  latitude < minimumLatitude || latitude > maximumLatitude
    ? throwLatitudeError(latitude)
    : longitude < minimumLongitude || longitude > maximumLongitude
    ? throwLongitudeError(longitude)
    : { latitude, longitude };

export default geoCoordinates;
