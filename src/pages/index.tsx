import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Covid from "../components/Covid/Covid";
import useGeoCoordinates from "../hooks/useGeoCoordinates";
import useCovidStatistics from "../hooks/useCovidStatistics";
import React from "react";
const Index = () => {
  const geoCoordinates = useGeoCoordinates();
  const localInformation = useCovidStatistics(geoCoordinates);
  return (
    <Container>
      {Header("covid near me")}
      {Covid(localInformation.statistics)}
    </Container>
  );
};

export default Index;
