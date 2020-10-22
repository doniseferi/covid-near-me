import { ConsecutiveBreaker, Policy, TimeoutStrategy } from "cockatiel";

export default Policy.wrap(
  Policy.handleAll().retry().attempts(3).exponential(),
  Policy.handleAll().circuitBreaker(10 * 1000, new ConsecutiveBreaker(5)),
  Policy.timeout(10000, TimeoutStrategy.Cooperative)
);
