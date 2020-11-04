import CircuitBreaker from "opossum";

export interface ResiliencyConfig {
  timeoutInMilliseconds: number;
  backOffPeriodInMilliseconds: number;
  errorThresholdPercentage: number;
}

export default <T extends unknown[] = unknown[], R = unknown>(
  resiliencyConfig: ResiliencyConfig,
  target: (...args: T) => Promise<R>,
  fallback: (...args: T) => Promise<R>
) => {
  if (!target) {
    throw new ReferenceError(
      `Please provide a method you wish to execute resiliently.`
    );
  }
  if (!fallback) {
    throw new ReferenceError(
      `Please provide a method you wish to execute as a failback when the circuit is open.`
    );
  }

  const circuitBreaker = new CircuitBreaker(target, {
    timeout: resiliencyConfig.timeoutInMilliseconds,
    resetTimeout: resiliencyConfig.backOffPeriodInMilliseconds,
    errorThresholdPercentage: resiliencyConfig.backOffPeriodInMilliseconds,
  }).fallback(fallback);

  return {
    executeResiliently: async (...args: T): Promise<R> =>
      await circuitBreaker.fire(...args),
  };
};
