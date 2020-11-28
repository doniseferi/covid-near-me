import React from "react";
import Covid from "../components/covid";
import useGeoCoordinates from "../hooks/useGeoCoordinates";
import useLocalInformation from "../hooks/useLocalInformation";

const App = () => {
  const geoCoordinates = useGeoCoordinates();
  const localInformation = useLocalInformation(geoCoordinates);
  return (
    <Covid
      location={localInformation.location}
      covid={localInformation.covid}
    />
  );
};

export default App;
