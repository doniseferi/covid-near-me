import { CovidStatistics, NationalCovidStatistics } from "../covid";

const isNationalCovidStatisticsType = (
  covid: NationalCovidStatistics | CovidStatistics
): covid is NationalCovidStatistics => {
  const guard = covid as NationalCovidStatistics;

  const hasMaleCases =
    guard.maleCases && guard.maleCases !== null && guard.maleCases.length > 0;

  const hasFemaleCases =
    guard.femaleCases &&
    guard.femaleCases !== null &&
    guard.femaleCases.length > 0;

  const hasCumAdmissionsByAge =
    guard.cumAdmissionsByAge &&
    guard.cumAdmissionsByAge !== null &&
    guard.cumAdmissionsByAge.length > 0;

  const hasNewAdmissions =
    guard.newAdmissions !== null && guard.newAdmissions > 0;

  const hasCumAdmissions =
    guard.cumAdmissions !== null && guard.cumAdmissions > 0;

  const hasCumTestsByPublishDate =
    guard.cumTestsByPublishDate !== null && guard.cumTestsByPublishDate > 0;

  const hasNewTestsByPublishDate =
    guard.newTestsByPublishDate !== null && guard.newTestsByPublishDate > 0;

  const hasCovidOccupiedMVBeds =
    guard.covidOccupiedMVBeds !== null && guard.covidOccupiedMVBeds > 0;

  const hasHospitalCases =
    guard.hospitalCases !== null && guard.hospitalCases > 0;

  return (
    guard &&
    (hasMaleCases ||
      hasFemaleCases ||
      hasCumAdmissionsByAge ||
      hasNewAdmissions ||
      hasCumAdmissions ||
      hasCumTestsByPublishDate ||
      hasNewTestsByPublishDate ||
      hasCovidOccupiedMVBeds ||
      hasHospitalCases)
  );
};

export { isNationalCovidStatisticsType };
