import Covid from "../components/covid";
import useGeoCoordinates from "../hooks/useGeoCoordinates";
import useCovidStatistics from "../hooks/useCovidStatistics";

const Index = () => {
  const geoCoordinates = useGeoCoordinates();
  const localInformation = useCovidStatistics(geoCoordinates);
  return Covid(localInformation.statistics);
};

export default Index;
