import { CovidStatistics, NationalCovidStatistics } from "../covid";

const isNationalCovidStatistics = (
  pet: NationalCovidStatistics | CovidStatistics
): pet is NationalCovidStatistics => {
  const peet = pet as NationalCovidStatistics;
  return (
    !peet.maleCases ||
    !peet.femaleCases ||
    !peet.newPillarOneTestsByPublishDate ||
    !peet.cumPillarOneTestsByPublishDate ||
    !peet.newPillarTwoTestsByPublishDate ||
    !peet.cumPillarTwoTestsByPublishDate ||
    !peet.newPillarThreeTestsByPublishDate ||
    !peet.cumPillarThreeTestsByPublishDate ||
    !peet.newAdmissions ||
    !peet.cumAdmissions ||
    !peet.cumAdmissionsByAge ||
    !peet.cumTestsByPublishDate ||
    !peet.newTestsByPublishDate ||
    !peet.covidOccupiedMVBeds ||
    !peet.hospitalCases
  );
};

const Covid = (statistics: NationalCovidStatistics | CovidStatistics) => {
  return (
    <dl>
      {statistics.areaName ? (
        <>
          <dt>location</dt>
          <dd>{statistics.areaName}</dd>
        </>
      ) : null}
      {statistics.date ? (
        <>
          <dt>date</dt>
          <dd>{new Date(statistics.date).toISOString().split("T")[0]}</dd>
        </>
      ) : null}
      {statistics.newCasesByPublishDate ? (
        <>
          <dt>new cases</dt>
          <dd>{statistics.newCasesByPublishDate}</dd>
        </>
      ) : null}
      {statistics.cumCasesByPublishDate ? (
        <>
          <dt>cumulative cases</dt>
          <dd>{statistics.cumCasesByPublishDate}</dd>
        </>
      ) : null}
      {statistics.newCasesBySpecimenDate ? (
        <>
          <dt>new positive cases collected on date</dt>
          <dd>{statistics.newCasesBySpecimenDate}</dd>
        </>
      ) : null}
      {statistics.cumCasesBySpecimenDateRate ? (
        <>
          <dt>
            rate of cumulative cases by specimen date per 100k resident
            population
          </dt>
          <dd>{statistics.cumCasesBySpecimenDateRate}</dd>
        </>
      ) : null}
      {statistics.cumCasesBySpecimenDate ? (
        <>
          <dt>
            cumulative cases by specimen date per 100k resident population
          </dt>
          <dd>{statistics.cumCasesBySpecimenDate}</dd>
        </>
      ) : null}
      {statistics.newDeaths28DaysByPublishDate ? (
        <>
          <dt>deaths within 28 days of positive test</dt>
          <dd>{statistics.newDeaths28DaysByPublishDate}</dd>
        </>
      ) : null}
      {statistics.cumDeaths28DaysByPublishDate ? (
        <>
          <dt>cumulative deaths within 28 days of positive test</dt>
          <dd>{statistics.cumDeaths28DaysByPublishDate}</dd>
        </>
      ) : null}
      {statistics.cumDeaths28DaysByPublishDateRate ? (
        <>
          <dt>
            Rate of cumulative deaths within 28 days of positive test per 100k
            resident population
          </dt>
          <dd>{statistics.cumDeaths28DaysByPublishDateRate}</dd>
        </>
      ) : null}
      {statistics.newDeaths28DaysByDeathDate ? (
        <>
          <dt>deaths within 28 days of positive test by death date</dt>
          <dd>{statistics.newDeaths28DaysByDeathDate}</dd>
        </>
      ) : null}
      {statistics.cumDeaths28DaysByDeathDate ? (
        <>
          <dt>
            cumulative deaths within 28 days of positive test by death date
          </dt>
          <dd>{statistics.cumDeaths28DaysByDeathDate}</dd>
        </>
      ) : null}
      {statistics.cumDeaths28DaysByDeathDateRate ? (
        <>
          <dt>
            rate of cumulative deaths within 28 days of positive test by death
            date per 100k resident population
          </dt>
          <dd>{statistics.cumDeaths28DaysByDeathDateRate}</dd>
        </>
      ) : null}
      {isNationalCovidStatistics(statistics)
        ? () => {
            {
              statistics.maleCases
                ? statistics.maleCases.map((x) => {
                    return (
                      <>
                        <dt>cases by age {x.age} (male)</dt>
                        <dd>{x.value}</dd>

                        <dt>rate</dt>
                        <dd>{x.rate}</dd>
                      </>
                    );
                  })
                : null;
            }

            {
              statistics.femaleCases
                ? statistics.femaleCases.map((x) => {
                    return (
                      <>
                        <dt>cases by age {x.age} (female)</dt>
                        <dd>{x.value}</dd>

                        <dt>rate</dt>
                        <dd>{x.rate}</dd>
                      </>
                    );
                  })
                : null;
            }
            {
              statistics.newPillarOneTestsByPublishDate ? (
                <>
                  <dt>new pillar one tests by publish date</dt>
                  <dd>{statistics.newPillarOneTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumPillarOneTestsByPublishDate ? (
                <>
                  <dt>cumulative pillar one tests by publish date</dt>
                  <dd>{statistics.cumPillarOneTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.newPillarTwoTestsByPublishDate ? (
                <>
                  <dt>new pillar two tests by publish date</dt>
                  <dd>{statistics.newPillarTwoTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumPillarTwoTestsByPublishDate ? (
                <>
                  <dt>cumulative pillar two tests by publish date</dt>
                  <dd>{statistics.cumPillarTwoTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.newPillarThreeTestsByPublishDate ? (
                <>
                  <dt>new pillar three tests by publish date</dt>
                  <dd>{statistics.newPillarThreeTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumPillarThreeTestsByPublishDate ? (
                <>
                  <dt>cumulative pillar three tests by publish date</dt>
                  <dd>{statistics.cumPillarThreeTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.newAdmissions ? (
                <>
                  <dt>new admissions</dt>
                  <dd>{statistics.newAdmissions}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumAdmissions ? (
                <>
                  <dt>cumulative number of admissions</dt>
                  <dd>{statistics.cumAdmissions}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumAdmissionsByAge
                ? statistics.cumAdmissionsByAge.map((x) => {
                    return (
                      <>
                        <dt>cumulative admissions by age {x.age}</dt>
                        <dd>{x.value}</dd>

                        <dt>rate</dt>
                        <dd>{x.rate}</dd>
                      </>
                    );
                  })
                : null;
            }
            {
              statistics.cumTestsByPublishDate ? (
                <>
                  <dt>cumulative tests</dt>
                  <dd>{statistics.cumTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.newTestsByPublishDate ? (
                <>
                  <dt>New tests</dt>
                  <dd>{statistics.newTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.covidOccupiedMVBeds ? (
                <>
                  <dt>covid-19 occupied beds with mechanical ventilators</dt>
                  <dd>{statistics.covidOccupiedMVBeds}</dd>
                </>
              ) : null;
            }
            {
              statistics.hospitalCases ? (
                <>
                  <dt>hospital cases</dt>
                  <dd>{statistics.hospitalCases}</dd>
                </>
              ) : null;
            }

            {
              statistics.cumDeaths28DaysByDeathDateRate ? (
                <>
                  <dt>
                    rate of cumulative deaths within 28 days of positive test by
                    death date per 100k resident population
                  </dt>
                  <dd>{statistics.cumDeaths28DaysByDeathDateRate}</dd>
                </>
              ) : null;
            }
          }
        : null}
    </dl>
  );
};

export default Covid;
