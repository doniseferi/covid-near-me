import { Polly, Timing } from "@pollyjs/core";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FsPersister from "@pollyjs/persister-fs";

interface MockHttpConfig {
  name: string;
  mode: "record" | "replay";
  delayInMilliseconds?: number;
}

const mockHttp = (config: MockHttpConfig): Polly => {
  Polly.register(NodeHttpAdapter);
  Polly.register(FsPersister);
  return new Polly(config.name, {
    mode: config.mode,
    adapters: ["node-http"],
    persister: "fs",
    logging: false,
    recordFailedRequests: true,
    recordIfMissing: true,
    timing: Timing.fixed(
      config.delayInMilliseconds ? config.delayInMilliseconds : 0
    ),
  });
};

export default (config: MockHttpConfig): Polly => mockHttp(config);
