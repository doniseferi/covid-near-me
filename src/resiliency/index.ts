import CircuitBreaker from "opossum";

export interface ResiliencyConfig {
  timeoutInMilliseconds: number;
  backOffPeriodInMilliseconds: number;
  errorThresholdPercentage: number;
}

export default (resiliencyConfig: ResiliencyConfig) => {
  const builder = <T extends unknown[] = unknown[], R = unknown[]>(
    target: (...args: T) => Promise<R>
  ) => {
    if (!target) {
      throw new ReferenceError(
        "Please provide a fallback method you wish to execute resiliently."
      );
    }

    const circuitBreaker = new CircuitBreaker(target, {
      timeout: resiliencyConfig.timeoutInMilliseconds,
      resetTimeout: resiliencyConfig.backOffPeriodInMilliseconds,
      errorThresholdPercentage: resiliencyConfig.backOffPeriodInMilliseconds,
    });

    const withFallback = (fallback: (...args: T) => Promise<R>) => {
      if (!fallback) {
        throw new ReferenceError("Fallback handler is null or undefined.");
      }
      return {
        executeResiliently: async (...args: T) =>
          await circuitBreaker.fallback(fallback).fire(...args),
      };
    };

    return {
      withFallBack: (fallback: (...args: T) => Promise<R>) =>
        withFallback(fallback),
      executeResiliently: async (...args: T) =>
        await circuitBreaker.fire(...args),
    };
  };

  return {
    build: builder,
  };
};
