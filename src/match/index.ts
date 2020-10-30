const matched = <T>(x: T) => ({
  on: () => matched(x),
  otherwise: () => x,
});

const match = <T>(x: T) => ({
  on: (pred: (x: T) => boolean, fn: (x: T) => T) =>
    pred(x) ? matched(fn(x)) : match(x),
  otherwise: (fn: <T>(x: T) => T) => fn(x),
});

export default match;
