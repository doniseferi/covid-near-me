import { LocalAuthority } from "../../location/interfaces/localAuthority";
import match from "../../match";
import { England, Scotland, Wales, NorthernIreland } from "../constants/index";
import config from "../../config/next.config";
import builder from "./builder";

const covidApiBaseUrl = () =>
  config.covidApiBaseUrl ??
  (() => {
    throw ReferenceError("Covid Api Base Url is null, undefined or empty.");
  })();

const getCovidDataByLocalAuthorityUrl = (
  localAuthority: LocalAuthority,
  date: Date
) => builder(covidApiBaseUrl()).build(date, "ltla", localAuthority.code);

const getNationalCovidApiUrl = (
  localAuthority: LocalAuthority,
  date: Date
): string => {
  const nation = match(localAuthority.code.charAt(0).toLowerCase())
    .on(
      (char) => char === "e",
      () => England
    )
    .on(
      (char) => char === "s",
      () => Scotland
    )
    .on(
      (char) => char === "w",
      () => Wales
    )
    .on(
      (char) => char === "n",
      () => NorthernIreland
    )
    .otherwise((char) => {
      throw new Error(
        `Cannot find nation with a local authority code char of ${char}`
      );
    });

  return builder(covidApiBaseUrl()).build(date, "nation", nation);
};

export { getNationalCovidApiUrl, getCovidDataByLocalAuthorityUrl };
