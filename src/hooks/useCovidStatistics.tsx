import axios from "axios";
import { useState, useEffect } from "react";
import { Covid } from "../handler";
import { GeoCoordinates } from "../location";

const skeleton: Covid = {
  location: {
    name: "",
    code: "",
    geoCoordinates: {
      latitude: 0,
      longitude: 0,
    },
  },
  statistics: {
    date: `${new Date(Date.now()).toDateString()}`,
    areaType: "",
    areaName: "",
    areaCode: "",
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
    femaleCases: [],
    maleCases: [],
    cumAdmissionsByAge: [],
    covidOccupiedMVBeds: 0,
    cumAdmissions: 0,
    cumPillarOneTestsByPublishDate: 0,
    cumPillarThreeTestsByPublishDate: 0,
    cumPillarTwoTestsByPublishDate: 0,
    cumTestsByPublishDate: 0,
  },
};

const useCovidStatistics = (geoCoordinates: GeoCoordinates) => {
  const areDefaultGeoCoordinates = (geoCoordinates: GeoCoordinates) =>
    geoCoordinates.latitude === 0 && geoCoordinates.longitude === 0;

  const [localInformation, setLocalInformation] = useState<Covid>(skeleton);
  const fetchData = async () => {
    if (!areDefaultGeoCoordinates(geoCoordinates)) {
      const url = `/api/covid?latitude=${geoCoordinates.latitude}&longitude=${geoCoordinates.longitude}`;
      const { data } = await axios.get<Covid>(url);
      setLocalInformation(data);
      // TODO: catch error log and rethrow
    }
  };
  useEffect(() => {
    fetchData();
  }, [`${geoCoordinates.latitude}{${geoCoordinates.longitude}`]);

  return { ...localInformation };
};

export default useCovidStatistics;
