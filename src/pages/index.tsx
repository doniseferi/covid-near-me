import React from "react";
import { LocalInformation } from "../handler";
import useGeoCoordinates from "../hooks/useGeoCoordinates";
import Covid from "../components/covid";

const mockLocalInformation: LocalInformation = {
  location: {
    name: "Westminster",
    code: "E09000033",
    geoCoordinates: {
      latitude: 51.524403199999995,
      longitude: -0.19333119999999998,
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

const App = () => {
  const geoCoordinates = useGeoCoordinates();
  console.log(geoCoordinates);
  return (
    <Covid
      location={mockLocalInformation.location}
      covid={mockLocalInformation.covid}
    />
  );
};

export default App;
