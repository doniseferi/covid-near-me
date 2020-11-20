import axios from "axios";
import { useEffect, useState } from "react";
import { LocalInformation } from "../handler";
import { Location } from "../location";

const Covid = ({ location: _location, covid: _covid }: LocalInformation) => {
  const [location, setLocation] = useState<Location>(_location);
  const [covid, setCovid] = useState<LocalInformation>({
    location: _location,
    covid: _covid,
  });
  useEffect(() => {
    const covidApi = async () => {
      if (location.geoCoordinates.latitude !== 0) {
        console.log(location);
        const url = `http://localhost:3000/api/covid?latitude=${_location.geoCoordinates.latitude}&longitude=${_location.geoCoordinates.longitude}`;
        const result = (await axios.get<LocalInformation>(url)).data;
        setCovid(result);
        console.log({ coviddy: covid });
      }
    };
    covidApi();
  }, []);
  return (
    <dl>
      <dt>local authority</dt>
      <dd>{_location.code}</dd>

      <dt>newCasesPublished</dt>
      <dd>{_covid.newCasesPublished}</dd>

      <dt>newCasesBySpecimen</dt>
      <dd>{_covid.newCasesBySpecimen}</dd>

      <dt>newDeathsPublished</dt>
      <dd>{_covid.newDeathsPublished}</dd>

      <dt>rateOfCumulativeCasesBySpecimenDate</dt>
      <dd>{_covid.rateOfCumulativeCasesBySpecimenDate}</dd>

      <dt>cumulativeCasesBySpecimen</dt>
      <dd>{_covid.cumulativeCasesBySpecimen}</dd>

      <dt>rateOfCumulativeDeathsBySpecimen</dt>
      <dd>{_covid.rateOfCumulativeDeathsBySpecimen}</dd>

      <dt>cumulativeDeathsBySpecimen</dt>
      <dd>{_covid.cumulativeDeathsBySpecimen}</dd>

      <dt>newDeaths28DaysByPublishDate</dt>
      <dd>{_covid.newDeaths28DaysByPublishDate}</dd>

      <dt>cumulativeDeaths28DaysByPublishDate</dt>
      <dd>{_covid.cumulativeDeaths28DaysByPublishDate}</dd>

      <dt>cumulativeDeaths28DaysByPublishDateRate</dt>
      <dd>{_covid.cumulativeDeaths28DaysByPublishDateRate}</dd>
    </dl>
  );
};

export default Covid;
