import React from "react";
import { CovidStatistics, NationalCovidStatistics } from "../covid";
import { AgeStatistics } from "../covid/interfaces/covid";

const uuidv4 = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const isNationalCovidStatistics = (
  covid: NationalCovidStatistics | CovidStatistics
): covid is NationalCovidStatistics => {
  const guard = covid as NationalCovidStatistics;

  const newAdmissions = !(guard.newAdmissions && guard.newAdmissions > 0);
  const cumAdmissions = !(guard.cumAdmissions && guard.cumAdmissions > 0);
  const cumAdmissionsByAge = !(
    guard.cumAdmissionsByAge && guard.cumAdmissionsByAge.length > 0
  );
  const maleCases = !(guard.maleCases && guard.maleCases.length > 0);
  const femaleCases = !(guard.femaleCases && guard.femaleCases.length > 0);
  const cumTestsByPublishDate = !(
    guard.cumTestsByPublishDate && guard.cumTestsByPublishDate > 0
  );
  const newTestsByPublishDate = !(
    guard.newTestsByPublishDate && guard.newTestsByPublishDate > 0
  );
  const covidOccupiedMVBeds = !(
    guard.covidOccupiedMVBeds && guard.covidOccupiedMVBeds > 0
  );
  const hospitalCases = !(guard.hospitalCases && guard.hospitalCases > 0);

  return (
    !newAdmissions &&
    !cumAdmissions &&
    !cumAdmissionsByAge &&
    !maleCases &&
    !femaleCases &&
    !cumTestsByPublishDate &&
    !newTestsByPublishDate &&
    !covidOccupiedMVBeds &&
    !hospitalCases
  );
};

const renderAgeStats = (term: string, ageStatistics: AgeStatistics[]) => {
  return ageStatistics.map((x) => {
    return (
      <React.Fragment key={uuidv4()}>
        <dt>{term}</dt>
        <dt>age {x.age} (male)</dt>
        <dd>{x.value}</dd>
        <dt>rate</dt>
        <dd>{x.rate}</dd>
      </React.Fragment>
    );
  });
};

const Covid = (statistics: NationalCovidStatistics | CovidStatistics) => {
  return (
    <dl>
      {statistics.areaName && (
        <>
          <dt>location</dt>
          <dd>{statistics.areaName}</dd>
        </>
      )}
      {statistics.date && (
        <>
          <dt>date</dt>
          <dd>{new Date(statistics.date).toISOString().split("T")[0]}</dd>
        </>
      )}
      {statistics.newCasesByPublishDate && (
        <>
          <dt>new cases</dt>
          <dd>{statistics.newCasesByPublishDate}</dd>
        </>
      )}
      {statistics.cumCasesByPublishDate && (
        <>
          <dt>cumulative cases</dt>
          <dd>{statistics.cumCasesByPublishDate}</dd>
        </>
      )}
      {statistics.newCasesBySpecimenDate && (
        <>
          <dt>new positive cases collected on date</dt>
          <dd>{statistics.newCasesBySpecimenDate}</dd>
        </>
      )}
      {statistics.cumCasesBySpecimenDateRate && (
        <>
          <dt>
            rate of cumulative cases by specimen date per 100k resident
            population
          </dt>
          <dd>{statistics.cumCasesBySpecimenDateRate}</dd>
        </>
      )}
      {statistics.cumCasesBySpecimenDate && (
        <>
          <dt>
            cumulative cases by specimen date per 100k resident population
          </dt>
          <dd>{statistics.cumCasesBySpecimenDate}</dd>
        </>
      )}
      {statistics.newDeaths28DaysByPublishDate && (
        <>
          <dt>deaths within 28 days of positive test</dt>
          <dd>{statistics.newDeaths28DaysByPublishDate}</dd>
        </>
      )}
      {statistics.cumDeaths28DaysByPublishDate && (
        <>
          <dt>cumulative deaths within 28 days of positive test</dt>
          <dd>{statistics.cumDeaths28DaysByPublishDate}</dd>
        </>
      )}
      {statistics.cumDeaths28DaysByPublishDateRate && (
        <>
          <dt>
            Rate of cumulative deaths within 28 days of positive test per 100k
            resident population
          </dt>
          <dd>{statistics.cumDeaths28DaysByPublishDateRate}</dd>
        </>
      )}
      {statistics.newDeaths28DaysByDeathDate && (
        <>
          <dt>deaths within 28 days of positive test by death date</dt>
          <dd>{statistics.newDeaths28DaysByDeathDate}</dd>
        </>
      )}
      {statistics.cumDeaths28DaysByDeathDate && (
        <>
          <dt>
            cumulative deaths within 28 days of positive test by death date
          </dt>
          <dd>{statistics.cumDeaths28DaysByDeathDate}</dd>
        </>
      )}
      {statistics.cumDeaths28DaysByDeathDateRate && (
        <>
          <dt>
            rate of cumulative deaths within 28 days of positive test by death
            date per 100k resident population
          </dt>
          <dd>{statistics.cumDeaths28DaysByDeathDateRate}</dd>
        </>
      )}
      {isNationalCovidStatistics(statistics) &&
        (() => {
          return (
            <>
              <dt>new hospital admissions</dt>
              <dd>{statistics.newAdmissions}</dd>

              <dt>cumulative number of hopsital admissions</dt>
              <dd>{statistics.cumAdmissions}</dd>

              {statistics.cumAdmissionsByAge &&
                renderAgeStats(
                  "cumulative admissions by age",
                  statistics.cumAdmissionsByAge
                )}

              {statistics.maleCases &&
                renderAgeStats("male cases", statistics.maleCases)}

              {statistics.femaleCases &&
                renderAgeStats("female cases", statistics.femaleCases)}

              <dt>cumulative tests</dt>
              <dd>{statistics.cumTestsByPublishDate}</dd>

              <dt>new tests</dt>
              <dd>{statistics.newTestsByPublishDate}</dd>

              <dt>covid-19 occupied beds with mechanical ventilators</dt>
              <dd>{statistics.covidOccupiedMVBeds}</dd>

              <dt>hospital cases</dt>
              <dd>{statistics.hospitalCases}</dd>
            </>
          );
        })()}
    </dl>
  );
};

export default Covid;
