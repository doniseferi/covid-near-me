import Container from "../components/Container/Container";
import Covid from "../components/Covid/Covid";
import useGeoCoordinates from "../hooks/useGeoCoordinates";
import useCovidStatistics from "../hooks/useCovidStatistics";

const Index = () => {
  const geoCoordinates = useGeoCoordinates();
  const localInformation = useCovidStatistics(geoCoordinates);
  return <Container children={Covid(localInformation.statistics)} />;
};

export default Index;
