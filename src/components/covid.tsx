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
      {statistics.areaType ? (
        <>
          <dt>areaType</dt>
          <dd>{statistics.areaType}</dd>
        </>
      ) : null}
      {statistics.areaName ? (
        <>
          <dt>areaName</dt>
          <dd>{statistics.areaName}</dd>
        </>
      ) : null}
      {statistics.areaCode ? (
        <>
          <dt>areaCode</dt>
          <dd>{statistics.areaCode}</dd>
        </>
      ) : null}
      {statistics.date ? (
        <>
          <dt>date</dt>
          <dd>{statistics.date}</dd>
        </>
      ) : null}
      {statistics.newCasesByPublishDate ? (
        <>
          <dt>newCasesByPublishDate</dt>
          <dd>{statistics.newCasesByPublishDate}</dd>
        </>
      ) : null}
      {statistics.cumCasesByPublishDate ? (
        <>
          <dt>cumCasesByPublishDate</dt>
          <dd>{statistics.cumCasesByPublishDate}</dd>
        </>
      ) : null}
      {statistics.newCasesBySpecimenDate ? (
        <>
          <dt>newCasesBySpecimenDate</dt>
          <dd>{statistics.newCasesBySpecimenDate}</dd>
        </>
      ) : null}
      {statistics.cumCasesBySpecimenDateRate ? (
        <>
          <dt>cumCasesBySpecimenDateRate</dt>
          <dd>{statistics.cumCasesBySpecimenDateRate}</dd>
        </>
      ) : null}
      {statistics.cumCasesBySpecimenDate ? (
        <>
          <dt>cumCasesBySpecimenDate</dt>
          <dd>{statistics.cumCasesBySpecimenDate}</dd>
        </>
      ) : null}
      {statistics.newDeaths28DaysByPublishDate ? (
        <>
          <dt>newDeaths28DaysByPublishDate</dt>
          <dd>{statistics.newDeaths28DaysByPublishDate}</dd>
        </>
      ) : null}
      {statistics.cumDeaths28DaysByPublishDate ? (
        <>
          <dt>cumDeaths28DaysByPublishDate</dt>
          <dd>{statistics.cumDeaths28DaysByPublishDate}</dd>
        </>
      ) : null}
      {statistics.cumDeaths28DaysByPublishDateRate ? (
        <>
          <dt>cumDeaths28DaysByPublishDateRate</dt>
          <dd>{statistics.cumDeaths28DaysByPublishDateRate}</dd>
        </>
      ) : null}
      {statistics.newDeaths28DaysByDeathDate ? (
        <>
          <dt>newDeaths28DaysByDeathDate</dt>
          <dd>{statistics.newDeaths28DaysByDeathDate}</dd>
        </>
      ) : null}
      {statistics.cumDeaths28DaysByDeathDate ? (
        <>
          <dt>cumDeaths28DaysByDeathDate</dt>
          <dd>{statistics.cumDeaths28DaysByDeathDate}</dd>
        </>
      ) : null}
      {statistics.cumDeaths28DaysByDeathDateRate ? (
        <>
          <dt>cumDeaths28DaysByDeathDateRate</dt>
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
                        <dt>age</dt>
                        <dd>{x.age}</dd>

                        <dt>value</dt>
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
                        <dt>age</dt>
                        <dd>{x.age}</dd>

                        <dt>value</dt>
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
                  <dt>newPillarOneTestsByPublishDate</dt>
                  <dd>{statistics.newPillarOneTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumPillarOneTestsByPublishDate ? (
                <>
                  <dt>cumPillarOneTestsByPublishDate</dt>
                  <dd>{statistics.cumPillarOneTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.newPillarTwoTestsByPublishDate ? (
                <>
                  <dt>newPillarTwoTestsByPublishDate</dt>
                  <dd>{statistics.newPillarTwoTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumPillarTwoTestsByPublishDate ? (
                <>
                  <dt>cumPillarTwoTestsByPublishDate</dt>
                  <dd>{statistics.cumPillarTwoTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.newPillarThreeTestsByPublishDate ? (
                <>
                  <dt>newPillarThreeTestsByPublishDate</dt>
                  <dd>{statistics.newPillarThreeTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumPillarThreeTestsByPublishDate ? (
                <>
                  <dt>cumPillarThreeTestsByPublishDate</dt>
                  <dd>{statistics.cumPillarThreeTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.newAdmissions ? (
                <>
                  <dt>newAdmissions</dt>
                  <dd>{statistics.newAdmissions}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumAdmissions ? (
                <>
                  <dt>cumAdmissions</dt>
                  <dd>{statistics.cumAdmissions}</dd>
                </>
              ) : null;
            }
            {
              statistics.cumAdmissionsByAge
                ? statistics.cumAdmissionsByAge.map((x) => {
                    return (
                      <>
                        <dt>age</dt>
                        <dd>{x.age}</dd>

                        <dt>value</dt>
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
                  <dt>cumTestsByPublishDate</dt>
                  <dd>{statistics.cumTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.newTestsByPublishDate ? (
                <>
                  <dt>newTestsByPublishDate</dt>
                  <dd>{statistics.newTestsByPublishDate}</dd>
                </>
              ) : null;
            }
            {
              statistics.covidOccupiedMVBeds ? (
                <>
                  <dt>covidOccupiedMVBeds</dt>
                  <dd>{statistics.covidOccupiedMVBeds}</dd>
                </>
              ) : null;
            }
            {
              statistics.hospitalCases ? (
                <>
                  <dt>hospitalCases</dt>
                  <dd>{statistics.hospitalCases}</dd>
                </>
              ) : null;
            }

            {
              statistics.cumDeaths28DaysByDeathDateRate ? (
                <>
                  <dt>cumDeaths28DaysByDeathDateRate</dt>
                  <dd>{statistics.cumDeaths28DaysByDeathDateRate}</dd>{" "}
                </>
              ) : null;
            }
          }
        : null}
    </dl>
  );
};

export default Covid;
