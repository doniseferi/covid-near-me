//api.coronavirus.data.gov.uk/v1/data?filters={areaType=utla;areaName=westminster;date=2020-10-14&structure={"areaName":"areaName","areaCode":"areaCode","date":"date","hash":"hash","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}
// https://api.coronavirus.data.gov.uk/v1/data?filters={areaType=utla;areaName=westminster;date=2020-10-14&structure={"areaName":"areaName","areaCode":"areaCode","date":"date","hash":"hash","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}
import path from "path";
import { MODE, Polly } from "@pollyjs/core";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FsPersister from "@pollyjs/persister-fs";
import PollyUtils from "@pollyjs/utils";

export default () => {
  Polly.register(NodeHttpAdapter);
  Polly.register(FsPersister);

  const mockHttp = (name: string, mode: MODE) => {
    const pollyOptions = {
      mode,
      adapters: ["node-http"],
      persister: "fs",
      persisterOptions: {
        fs: {
          recordingsDir: path.join(__dirname, "./recordings"),
        },
      },
      // logging: true,
      recordFailedRequests: mode === "record",
      recordIfMissing: mode === "record",
      matchRequestsBy: {
        headers: false,
        order: false,
        url: {
          port: false,
          hostname: false,
          protocol: false,
        },
      },
    };
    return new Polly(name, pollyOptions);
  };

  return {
    recordHttp: (name: string) => {
      const res = mockHttp(name, "record");
      return res;
    },
    stubHttp: (name: string) => mockHttp(name, PollyUtils.MODES.REPLAY),
  };
};
