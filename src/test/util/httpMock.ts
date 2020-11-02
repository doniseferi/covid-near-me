import { Polly, Timing } from "@pollyjs/core";
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
    logging: false,
    recordFailedRequests: mode === "record",
    recordIfMissing: mode === "record",
  });
};
const record = (name: string): Polly => mockHttp(name, "record");
const mock = (name: string): Polly => mockHttp(name, "replay");

export { record, mock };
