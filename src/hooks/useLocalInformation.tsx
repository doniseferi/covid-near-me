import axios from "axios";
import { useState, useEffect } from "react";
import { LocalCovidStatistics } from "../handler";
import { GeoCoordinates } from "../location";

const skeleton: LocalCovidStatistics = {
  location: {
    name: "",
    code: "",
    geoCoordinates: {
      latitude: 0,
      longitude: 0,
    },
  },
  statistics: {
    areaType: "",
    areaName: "",
    areaCode: "",
    date: "",
    newCasesByPublishDate: 0,
    cumCasesByPublishDate: 0,
    newCasesBySpecimenDate: 0,
    cumCasesBySpecimenDateRate: 0,
    cumCasesBySpecimenDate: 0,
    newDeaths28DaysByPublishDate: 0,
    cumDeaths28DaysByPublishDate: 0,
    cumDeaths28DaysByPublishDateRate: 0,
    newDeaths28DaysByDeathDate: 0,
    cumDeaths28DaysByDeathDate: 0,
    cumDeaths28DaysByDeathDateRate: 0,
  },
};

const useLocalInformation = (geoCoordinates: GeoCoordinates) => {
  const areDefaultGeoCoordinates = (geoCoordinates: GeoCoordinates) =>
    geoCoordinates.latitude === 0 && geoCoordinates.longitude == 0;

  const [
    localInformation,
    setLocalInformation,
  ] = useState<LocalCovidStatistics>(skeleton);
  useEffect(() => {
    fetchData();
  }, [`${geoCoordinates.latitude}{${geoCoordinates.longitude}`]);

  const fetchData = async () => {
    if (!areDefaultGeoCoordinates(geoCoordinates)) {
      const url = `/api/covid?latitude=${geoCoordinates.latitude}&longitude=${geoCoordinates.longitude}`;
      const { data } = await axios.get<LocalCovidStatistics>(url);
      setLocalInformation(data);
      // TODO: catch error log and rethrow
    }
  };
  return { ...localInformation };
};

export default useLocalInformation;
