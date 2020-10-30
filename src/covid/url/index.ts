import { Location } from "../../location/index";
import match from "../../match";
import { England, Scotland, Wales, NorthernIreland } from "../constants/index";
import config from "../../config/next.config";
import builder from "./urlBuilder";

const getCovidDataByLocalAuthorityUrl = (location: Location, date: Date) =>
  builder(config.covidApiBaseUrl).build(date, "ltla", location.code);

const getNationalCovidApiUrl = (location: Location, date: Date): string => {
  const nation = match(location.code.charAt(0).toLowerCase())
    .on(
      (c) => c === "e",
      () => England
    )
    .on(
      (c) => c === "s",
      () => Scotland
    )
    .on(
      (c) => c === "w",
      () => Wales
    )
    .on(
      (c) => c === "n",
      () => NorthernIreland
    )
    .otherwise((v) => {
      throw new Error(
        `Cannot find nation with a local authority code char of ${v}`
      );
    });

  return builder(config.covidApiBaseUrl).build(date, "nation", nation);
};

export { getNationalCovidApiUrl, getCovidDataByLocalAuthorityUrl };
