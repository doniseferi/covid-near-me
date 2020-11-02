import { Polly } from "@pollyjs/core";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FsPersister from "@pollyjs/persister-fs";
import { MODE } from "@pollyjs/core";

const mockHttp = (name: string, mode: MODE): Polly => {
  Polly.register(NodeHttpAdapter);
  Polly.register(FsPersister);
  return new Polly(name, {
    mode,
    adapters: ["node-http"],
    persister: "fs",
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
  });
};
const recordHttp = (name: string): Polly => mockHttp(name, "record");
const stubHttp = (name: string): Polly => mockHttp(name, "replay");

export { recordHttp, stubHttp };
