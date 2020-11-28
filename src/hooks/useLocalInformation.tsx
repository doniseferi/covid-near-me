import axios from "axios";
import { useState, useEffect } from "react";
import { LocalInformation } from "../handler";
import { GeoCoordinates } from "../location";

const skeleton: LocalInformation = {
  location: {
    name: "",
    code: "",
    geoCoordinates: {
      latitude: 0,
      longitude: 0,
    },
  },
  covid: {
    newCasesPublished: "0",
    newCasesBySpecimen: "0",
    newDeathsPublished: "0",
    rateOfCumulativeCasesBySpecimenDate: "0",
    cumulativeCasesBySpecimen: "0",
    rateOfCumulativeDeathsBySpecimen: "0",
    cumulativeDeathsBySpecimen: "0",
    newDeaths28DaysByPublishDate: "0",
    cumulativeDeaths28DaysByPublishDate: "0",
    cumulativeDeaths28DaysByPublishDateRate: "0",
  },
};

const useLocalInformation = (geoCoordinates: GeoCoordinates) => {
  const areDefaultGeoCoordinates = (geoCoordinates: GeoCoordinates) =>
    geoCoordinates.latitude === 0 && geoCoordinates.longitude == 0;

  const [localInformation, setLocalInformation] = useState<LocalInformation>(
    skeleton
  );
  useEffect(() => {
    fetchData();
  }, [`${geoCoordinates.latitude}{${geoCoordinates.longitude}`]);

  const fetchData = async () => {
    if (!areDefaultGeoCoordinates(geoCoordinates)) {
      const url = `/api/covid?latitude=${geoCoordinates.latitude}&longitude=${geoCoordinates.longitude}`;
      const { data } = await axios.get<LocalInformation>(url);
      setLocalInformation(data);
      // TODO: catch error log and rethrow
    }
  };
  return { ...localInformation };
};

export default useLocalInformation;
