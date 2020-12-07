import { CovidStatistics } from "../covid";

const Covid = (covidStatistics: CovidStatistics) => (
  <dl>
    <dt>areaType</dt>
    <dd>{covidStatistics.areaType}</dd>

    <dt>areaName</dt>
    <dd>{covidStatistics.areaName}</dd>

    <dt>areaCode</dt>
    <dd>{covidStatistics.areaCode}</dd>

    <dt>date</dt>
    <dd>{covidStatistics.date}</dd>

    <dt>newCasesByPublishDate</dt>
    <dd>{covidStatistics.newCasesByPublishDate}</dd>

    <dt>cumCasesByPublishDate</dt>
    <dd>{covidStatistics.cumCasesByPublishDate}</dd>

    <dt>newCasesBySpecimenDate</dt>
    <dd>{covidStatistics.newCasesBySpecimenDate}</dd>

    <dt>cumCasesBySpecimenDateRate</dt>
    <dd>{covidStatistics.cumCasesBySpecimenDateRate}</dd>

    <dt>cumCasesBySpecimenDate</dt>
    <dd>{covidStatistics.cumCasesBySpecimenDate}</dd>

    <dt>newDeaths28DaysByPublishDate</dt>
    <dd>{covidStatistics.newDeaths28DaysByPublishDate}</dd>

    <dt>cumDeaths28DaysByPublishDate</dt>
    <dd>{covidStatistics.cumDeaths28DaysByPublishDate}</dd>

    <dt>cumDeaths28DaysByPublishDateRate</dt>
    <dd>{covidStatistics.cumDeaths28DaysByPublishDateRate}</dd>

    <dt>newDeaths28DaysByDeathDate</dt>
    <dd>{covidStatistics.newDeaths28DaysByDeathDate}</dd>

    <dt>cumDeaths28DaysByDeathDate</dt>
    <dd>{covidStatistics.cumDeaths28DaysByDeathDate}</dd>

    {covidStatistics.cumDeaths28DaysByDeathDateRate ? (
      <>
        <dt>cumDeaths28DaysByDeathDateRate</dt>
        <dd>{covidStatistics.cumDeaths28DaysByDeathDateRate}</dd>{" "}
      </>
    ) : null}
  </dl>
);

export default Covid;
