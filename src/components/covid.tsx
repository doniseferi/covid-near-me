import { LocalInformation } from "../handler";

const Covid = ({ location, covid }: LocalInformation) => (
  <dl>
    <dt>local authority</dt>
    <dd>{location.code}</dd>

    <dt>newCasesPublished</dt>
    <dd>{covid.newCasesPublished}</dd>

    <dt>newCasesBySpecimen</dt>
    <dd>{covid.newCasesBySpecimen}</dd>

    <dt>newDeathsPublished</dt>
    <dd>{covid.newDeathsPublished}</dd>

    <dt>rateOfCumulativeCasesBySpecimenDate</dt>
    <dd>{covid.rateOfCumulativeCasesBySpecimenDate}</dd>

    <dt>cumulativeCasesBySpecimen</dt>
    <dd>{covid.cumulativeCasesBySpecimen}</dd>

    <dt>rateOfCumulativeDeathsBySpecimen</dt>
    <dd>{covid.rateOfCumulativeDeathsBySpecimen}</dd>

    <dt>cumulativeDeathsBySpecimen</dt>
    <dd>{covid.cumulativeDeathsBySpecimen}</dd>

    <dt>newDeaths28DaysByPublishDate</dt>
    <dd>{covid.newDeaths28DaysByPublishDate}</dd>

    <dt>cumulativeDeaths28DaysByPublishDate</dt>
    <dd>{covid.cumulativeDeaths28DaysByPublishDate}</dd>

    <dt>cumulativeDeaths28DaysByPublishDateRate</dt>
    <dd>{covid.cumulativeDeaths28DaysByPublishDateRate}</dd>
  </dl>
);

export default Covid;
