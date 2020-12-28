import { LocalAuthority } from "../../location/interfaces/localAuthority";
import match from "../../match";
import { CountryCode } from "../constants/index";
import config from "../../config/next.config";
import builder from "./builder";

const getCovidApiBaseUrl = () =>
  config.covidApiBaseUrl ??
  (() => {
    throw new ReferenceError("Covid Api Base Url is null, undefined or empty.");
  })();

const getCovidDataByLocalAuthorityUrl = (
  localAuthority: LocalAuthority,
  date: Date
) => builder(getCovidApiBaseUrl()).build(date, "ltla", localAuthority.code);

const getNationalCovidApiUrl = (
  localAuthority: LocalAuthority,
  date: Date
): string => {
  const nation = match(localAuthority.code.charAt(0).toLowerCase())
    .on(
      (char) => char === "e",
      () => CountryCode.England
    )
    .on(
      (char) => char === "s",
      () => CountryCode.Scotland
    )
    .on(
      (char) => char === "w",
      () => CountryCode.Wales
    )
    .on(
      (char) => char === "n",
      () => CountryCode.NorthernIreland
    )
    .otherwise((char) => {
      throw new Error(
        `Cannot find nation with a local authority code char of ${char}`
      );
    });

  return builder(getCovidApiBaseUrl()).build(date, "nation", nation);
};

export { getNationalCovidApiUrl, getCovidDataByLocalAuthorityUrl };
