# covid-near-me

## Nation

```
GET:https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;date=2020-09-27&structure={"areaType":"areaType","areaName":"areaName","areaCode":"areaCode","date":"date","hash":"hash","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumCasesBySpecimenDateRate":"cumCasesBySpecimenDateRate","newCasesBySpecimenDate":"newCasesBySpecimenDate","cumCasesBySpecimenDateRate":"cumCasesBySpecimenDateRate","cumCasesBySpecimenDate":"cumCasesBySpecimenDate","maleCases":"maleCases","femaleCases":"femaleCases","newPillarOneTestsByPublishDate":"newPillarOneTestsByPublishDate","cumPillarOneTestsByPublishDate":"cumPillarOneTestsByPublishDate","newPillarTwoTestsByPublishDate":"newPillarTwoTestsByPublishDate","cumPillarTwoTestsByPublishDate":"cumPillarTwoTestsByPublishDate","newPillarThreeTestsByPublishDate":"newPillarThreeTestsByPublishDate","cumPillarThreeTestsByPublishDate":"cumPillarThreeTestsByPublishDate","newPillarFourTestsByPublishDate":"newPillarFourTestsByPublishDate","cumPillarFourTestsByPublishDate":"cumPillarFourTestsByPublishDate","newAdmissions":"newAdmissions","cumAdmissions":"cumAdmissions","cumAdmissionsByAge":"cumAdmissionsByAge","cumTestsByPublishDate":"cumTestsByPublishDate","newTestsByPublishDate":"newTestsByPublishDate","covidOccupiedMVBeds":"covidOccupiedMVBeds","hospitalCases":"hospitalCases","plannedCapacityByPublishDate":"plannedCapacityByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDateRate":"cumDeaths28DaysByDeathDateRate"}
```

returns

```
{
    "length": 4,
    "maxPageLimit": 1000,
    "data": [
        {
            "areaType": "nation",
            "areaName": "England",
            "areaCode": "E92000001",
            "date": "2020-09-27",
            "hash": "1d40255ac2bc5eee3f2dce7a9feb755dcb80a041ccba53f4899a273853b0345c",
            "newCasesByPublishDate": 4800,
            "cumCasesByPublishDate": 373719,
            "cumCasesBySpecimenDateRate": null,
            "newCasesBySpecimenDate": null,
            "cumCasesBySpecimenDate": null,
            "maleCases": null,
            "femaleCases": null,
            "newPillarOneTestsByPublishDate": null,
            "cumPillarOneTestsByPublishDate": null,
            "newPillarTwoTestsByPublishDate": null,
            "cumPillarTwoTestsByPublishDate": null,
            "newPillarThreeTestsByPublishDate": null,
            "cumPillarThreeTestsByPublishDate": null,
            "newPillarFourTestsByPublishDate": null,
            "cumPillarFourTestsByPublishDate": null,
            "newAdmissions": null,
            "cumAdmissions": null,
            "cumAdmissionsByAge": null,
            "cumTestsByPublishDate": null,
            "newTestsByPublishDate": null,
            "covidOccupiedMVBeds": 233,
            "hospitalCases": 1721,
            "plannedCapacityByPublishDate": null,
            "newDeaths28DaysByPublishDate": 16,
            "cumDeaths28DaysByPublishDate": 37286,
            "cumDeaths28DaysByPublishDateRate": 66.2,
            "newDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDateRate": null
        },
        {
            "areaType": "nation",
            "areaName": "Northern Ireland",
            "areaCode": "N92000002",
            "date": "2020-09-27",
            "hash": "e56cb08dd35cf0bf0d20e814fe7909e79a877085a88b3940dc7ad16d7d68de9f",
            "newCasesByPublishDate": 187,
            "cumCasesByPublishDate": 10729,
            "cumCasesBySpecimenDateRate": null,
            "newCasesBySpecimenDate": null,
            "cumCasesBySpecimenDate": null,
            "maleCases": null,
            "femaleCases": null,
            "newPillarOneTestsByPublishDate": null,
            "cumPillarOneTestsByPublishDate": null,
            "newPillarTwoTestsByPublishDate": null,
            "cumPillarTwoTestsByPublishDate": null,
            "newPillarThreeTestsByPublishDate": null,
            "cumPillarThreeTestsByPublishDate": null,
            "newPillarFourTestsByPublishDate": null,
            "cumPillarFourTestsByPublishDate": null,
            "newAdmissions": null,
            "cumAdmissions": null,
            "cumAdmissionsByAge": null,
            "cumTestsByPublishDate": null,
            "newTestsByPublishDate": null,
            "covidOccupiedMVBeds": null,
            "hospitalCases": null,
            "plannedCapacityByPublishDate": null,
            "newDeaths28DaysByPublishDate": 0,
            "cumDeaths28DaysByPublishDate": 578,
            "cumDeaths28DaysByPublishDateRate": 30.5,
            "newDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDateRate": null
        },
        {
            "areaType": "nation",
            "areaName": "Scotland",
            "areaCode": "S92000003",
            "date": "2020-09-27",
            "hash": "0e3067655a59831688c5e12f5e247ca072c8a3e7aea8830fe5e59cf336fb6fda",
            "newCasesByPublishDate": 344,
            "cumCasesByPublishDate": 27576,
            "cumCasesBySpecimenDateRate": null,
            "newCasesBySpecimenDate": null,
            "cumCasesBySpecimenDate": null,
            "maleCases": null,
            "femaleCases": null,
            "newPillarOneTestsByPublishDate": null,
            "cumPillarOneTestsByPublishDate": null,
            "newPillarTwoTestsByPublishDate": null,
            "cumPillarTwoTestsByPublishDate": null,
            "newPillarThreeTestsByPublishDate": null,
            "cumPillarThreeTestsByPublishDate": null,
            "newPillarFourTestsByPublishDate": null,
            "cumPillarFourTestsByPublishDate": null,
            "newAdmissions": null,
            "cumAdmissions": null,
            "cumAdmissionsByAge": null,
            "cumTestsByPublishDate": null,
            "newTestsByPublishDate": null,
            "covidOccupiedMVBeds": null,
            "hospitalCases": null,
            "plannedCapacityByPublishDate": null,
            "newDeaths28DaysByPublishDate": 1,
            "cumDeaths28DaysByPublishDate": 2512,
            "cumDeaths28DaysByPublishDateRate": 46,
            "newDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDateRate": null
        },
        {
            "areaType": "nation",
            "areaName": "Wales",
            "areaCode": "W92000004",
            "date": "2020-09-27",
            "hash": "70054399264c8b1190e83f9e7fed411ad75f936f9aedbddf4d20c82112ae6019",
            "newCasesByPublishDate": 362,
            "cumCasesByPublishDate": 22945,
            "cumCasesBySpecimenDateRate": null,
            "newCasesBySpecimenDate": null,
            "cumCasesBySpecimenDate": null,
            "maleCases": null,
            "femaleCases": null,
            "newPillarOneTestsByPublishDate": null,
            "cumPillarOneTestsByPublishDate": null,
            "newPillarTwoTestsByPublishDate": null,
            "cumPillarTwoTestsByPublishDate": null,
            "newPillarThreeTestsByPublishDate": null,
            "cumPillarThreeTestsByPublishDate": null,
            "newPillarFourTestsByPublishDate": null,
            "cumPillarFourTestsByPublishDate": null,
            "newAdmissions": null,
            "cumAdmissions": null,
            "cumAdmissionsByAge": null,
            "cumTestsByPublishDate": null,
            "newTestsByPublishDate": null,
            "covidOccupiedMVBeds": null,
            "hospitalCases": null,
            "plannedCapacityByPublishDate": null,
            "newDeaths28DaysByPublishDate": 0,
            "cumDeaths28DaysByPublishDate": 1612,
            "cumDeaths28DaysByPublishDateRate": 51.1,
            "newDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDateRate": null
        }
    ],
    "pagination": {
        "current": "/v1/data?filters=areaType=nation;date=2020-09-27&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22hash%22:%22hash%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22,%22maleCases%22:%22maleCases%22,%22femaleCases%22:%22femaleCases%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22cumAdmissions%22:%22cumAdmissions%22,%22cumAdmissionsByAge%22:%22cumAdmissionsByAge%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22covidOccupiedMVBeds%22:%22covidOccupiedMVBeds%22,%22hospitalCases%22:%22hospitalCases%22,%22plannedCapacityByPublishDate%22:%22plannedCapacityByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDateRate%22:%22cumDeaths28DaysByPublishDateRate%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDateRate%22:%22cumDeaths28DaysByDeathDateRate%22%7D&format=json&page=1",
        "next": null,
        "previous": null,
        "first": "/v1/data?filters=areaType=nation;date=2020-09-27&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22hash%22:%22hash%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22,%22maleCases%22:%22maleCases%22,%22femaleCases%22:%22femaleCases%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22cumAdmissions%22:%22cumAdmissions%22,%22cumAdmissionsByAge%22:%22cumAdmissionsByAge%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22covidOccupiedMVBeds%22:%22covidOccupiedMVBeds%22,%22hospitalCases%22:%22hospitalCases%22,%22plannedCapacityByPublishDate%22:%22plannedCapacityByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDateRate%22:%22cumDeaths28DaysByPublishDateRate%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDateRate%22:%22cumDeaths28DaysByDeathDateRate%22%7D&format=json&page=1",
        "last": "/v1/data?filters=areaType=nation;date=2020-09-27&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22hash%22:%22hash%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22,%22maleCases%22:%22maleCases%22,%22femaleCases%22:%22femaleCases%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22cumAdmissions%22:%22cumAdmissions%22,%22cumAdmissionsByAge%22:%22cumAdmissionsByAge%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22covidOccupiedMVBeds%22:%22covidOccupiedMVBeds%22,%22hospitalCases%22:%22hospitalCases%22,%22plannedCapacityByPublishDate%22:%22plannedCapacityByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDateRate%22:%22cumDeaths28DaysByPublishDateRate%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDateRate%22:%22cumDeaths28DaysByDeathDateRate%22%7D&format=json&page=1"
    }
}
```

## Local

```
GET:https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=ltla;areaName=westminster;date=2020-09-27&structure={"areaType":"areaType","areaName":"areaName","areaCode":"areaCode","date":"date","hash":"hash","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumCasesBySpecimenDateRate":"cumCasesBySpecimenDateRate","newCasesBySpecimenDate":"newCasesBySpecimenDate","cumCasesBySpecimenDateRate":"cumCasesBySpecimenDateRate","cumCasesBySpecimenDate":"cumCasesBySpecimenDate","maleCases":"maleCases","femaleCases":"femaleCases","newPillarOneTestsByPublishDate":"newPillarOneTestsByPublishDate","cumPillarOneTestsByPublishDate":"cumPillarOneTestsByPublishDate","newPillarTwoTestsByPublishDate":"newPillarTwoTestsByPublishDate","cumPillarTwoTestsByPublishDate":"cumPillarTwoTestsByPublishDate","newPillarThreeTestsByPublishDate":"newPillarThreeTestsByPublishDate","cumPillarThreeTestsByPublishDate":"cumPillarThreeTestsByPublishDate","newPillarFourTestsByPublishDate":"newPillarFourTestsByPublishDate","cumPillarFourTestsByPublishDate":"cumPillarFourTestsByPublishDate","newAdmissions":"newAdmissions","cumAdmissions":"cumAdmissions","cumAdmissionsByAge":"cumAdmissionsByAge","cumTestsByPublishDate":"cumTestsByPublishDate","newTestsByPublishDate":"newTestsByPublishDate","covidOccupiedMVBeds":"covidOccupiedMVBeds","hospitalCases":"hospitalCases","plannedCapacityByPublishDate":"plannedCapacityByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDate":"cumDeaths28DaysByDeathDate","cumDeaths28DaysByDeathDateRate":"cumDeaths28DaysByDeathDateRate"}
```

returns

```
{
    "length": 1,
    "maxPageLimit": 1000,
    "data": [
        {
            "areaType": "ltla",
            "areaName": "Westminster",
            "areaCode": "E09000033",
            "date": "2020-09-27",
            "hash": "24bda59f0a5a8efb4b28607e8584c577732646a56e6302a84d54b94fbaf8ff2a",
            "newCasesByPublishDate": 10,
            "cumCasesByPublishDate": 1167,
            "cumCasesBySpecimenDateRate": null,
            "newCasesBySpecimenDate": null,
            "cumCasesBySpecimenDate": null,
            "maleCases": null,
            "femaleCases": null,
            "newPillarOneTestsByPublishDate": null,
            "cumPillarOneTestsByPublishDate": null,
            "newPillarTwoTestsByPublishDate": null,
            "cumPillarTwoTestsByPublishDate": null,
            "newPillarThreeTestsByPublishDate": null,
            "cumPillarThreeTestsByPublishDate": null,
            "newPillarFourTestsByPublishDate": null,
            "cumPillarFourTestsByPublishDate": null,
            "newAdmissions": null,
            "cumAdmissions": null,
            "cumAdmissionsByAge": null,
            "cumTestsByPublishDate": null,
            "newTestsByPublishDate": null,
            "covidOccupiedMVBeds": null,
            "hospitalCases": null,
            "plannedCapacityByPublishDate": null,
            "newDeaths28DaysByPublishDate": 0,
            "cumDeaths28DaysByPublishDate": 132,
            "cumDeaths28DaysByPublishDateRate": 50.5,
            "newDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDate": null,
            "cumDeaths28DaysByDeathDateRate": null
        }
    ],
    "pagination": {
        "current": "/v1/data?filters=areaType=ltla;areaName=westminster;date=2020-09-27&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22hash%22:%22hash%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22,%22maleCases%22:%22maleCases%22,%22femaleCases%22:%22femaleCases%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22cumAdmissions%22:%22cumAdmissions%22,%22cumAdmissionsByAge%22:%22cumAdmissionsByAge%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22covidOccupiedMVBeds%22:%22covidOccupiedMVBeds%22,%22hospitalCases%22:%22hospitalCases%22,%22plannedCapacityByPublishDate%22:%22plannedCapacityByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDateRate%22:%22cumDeaths28DaysByPublishDateRate%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDateRate%22:%22cumDeaths28DaysByDeathDateRate%22%7D&format=json&page=1",
        "next": null,
        "previous": null,
        "first": "/v1/data?filters=areaType=ltla;areaName=westminster;date=2020-09-27&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22hash%22:%22hash%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22,%22maleCases%22:%22maleCases%22,%22femaleCases%22:%22femaleCases%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22cumAdmissions%22:%22cumAdmissions%22,%22cumAdmissionsByAge%22:%22cumAdmissionsByAge%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22covidOccupiedMVBeds%22:%22covidOccupiedMVBeds%22,%22hospitalCases%22:%22hospitalCases%22,%22plannedCapacityByPublishDate%22:%22plannedCapacityByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDateRate%22:%22cumDeaths28DaysByPublishDateRate%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDateRate%22:%22cumDeaths28DaysByDeathDateRate%22%7D&format=json&page=1",
        "last": "/v1/data?filters=areaType=ltla;areaName=westminster;date=2020-09-27&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22hash%22:%22hash%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDateRate%22:%22cumCasesBySpecimenDateRate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22,%22maleCases%22:%22maleCases%22,%22femaleCases%22:%22femaleCases%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22newAdmissions%22:%22newAdmissions%22,%22cumAdmissions%22:%22cumAdmissions%22,%22cumAdmissionsByAge%22:%22cumAdmissionsByAge%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22covidOccupiedMVBeds%22:%22covidOccupiedMVBeds%22,%22hospitalCases%22:%22hospitalCases%22,%22plannedCapacityByPublishDate%22:%22plannedCapacityByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDateRate%22:%22cumDeaths28DaysByPublishDateRate%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDateRate%22:%22cumDeaths28DaysByDeathDateRate%22%7D&format=json&page=1"
    }
}
```
