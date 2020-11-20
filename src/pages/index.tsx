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
    newCasesPublished: "30",
    newCasesBySpecimen: "5",
    newDeathsPublished: "3",
    rateOfCumulativeCasesBySpecimenDate: "1",
    cumulativeCasesBySpecimen: "5",
    rateOfCumulativeDeathsBySpecimen: "3",
    cumulativeDeathsBySpecimen: "2",
    newDeaths28DaysByPublishDate: "3",
    cumulativeDeaths28DaysByPublishDate: "145",
    cumulativeDeaths28DaysByPublishDateRate: "55.5",
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
