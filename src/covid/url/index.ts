import { LocalAuthority } from "../../location/interfaces/localAuthority";
import match from "../../match";
import { England, Scotland, Wales, NorthernIreland } from "../constants/index";
import config from "../../config/next.config";
import builder from "./builder";

const getCovidDataByLocalAuthorityUrl = (
  localAuthority: LocalAuthority,
  date: Date
) => builder(config.covidApiBaseUrl).build(date, "ltla", localAuthority.code);

const getNationalCovidApiUrl = (
  localAuthority: LocalAuthority,
  date: Date
): string => {
  const nation = match(localAuthority.code.charAt(0).toLowerCase())
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
