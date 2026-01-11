export function pipe<A>(value: A): A;
export function pipe<A, B>(value: A, fn1: (arg: A) => B): B;
export function pipe<A, B, C>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
): C;
export function pipe<A, B, C, D>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
): D;
export function pipe<A, B, C, D, E>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
): E;
export function pipe<A, B, C, D, E, F>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
): F;
export function pipe<A, B, C, D, E, F, G>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
): G;
export function pipe<A, B, C, D, E, F, G, H>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
): H;
export function pipe<A, B, C, D, E, F, G, H, I>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
): I;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
): J;
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
): K;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
): L;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
): M;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
  fn13: (arg: M) => N,
): N;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
  fn13: (arg: M) => N,
  fn14: (arg: N) => O,
): O;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
  fn13: (arg: M) => N,
  fn14: (arg: N) => O,
  fn15: (arg: O) => P,
): P;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
  fn13: (arg: M) => N,
  fn14: (arg: N) => O,
  fn15: (arg: O) => P,
  fn16: (arg: P) => Q,
): Q;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
  fn13: (arg: M) => N,
  fn14: (arg: N) => O,
  fn15: (arg: O) => P,
  fn16: (arg: P) => Q,
  fn17: (arg: Q) => R,
): R;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
  fn13: (arg: M) => N,
  fn14: (arg: N) => O,
  fn15: (arg: O) => P,
  fn16: (arg: P) => Q,
  fn17: (arg: Q) => R,
  fn18: (arg: R) => S,
): S;
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
  fn13: (arg: M) => N,
  fn14: (arg: N) => O,
  fn15: (arg: O) => P,
  fn16: (arg: P) => Q,
  fn17: (arg: Q) => R,
  fn18: (arg: R) => S,
  fn19: (arg: S) => T,
): T;
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
>(
  value: A,
  fn1: (arg: A) => B,
  fn2: (arg: B) => C,
  fn3: (arg: C) => D,
  fn4: (arg: D) => E,
  fn5: (arg: E) => F,
  fn6: (arg: F) => G,
  fn7: (arg: G) => H,
  fn8: (arg: H) => I,
  fn9: (arg: I) => J,
  fn10: (arg: J) => K,
  fn11: (arg: K) => L,
  fn12: (arg: L) => M,
  fn13: (arg: M) => N,
  fn14: (arg: N) => O,
  fn15: (arg: O) => P,
  fn16: (arg: P) => Q,
  fn17: (arg: Q) => R,
  fn18: (arg: R) => S,
  fn19: (arg: S) => T,
  fn20: (arg: T) => U,
): U;

export function pipe(value: any, ...fns: Function[]): any {
  return fns.reduce((acc, fn) => fn(acc), value);
}

export function* lazyMap<T, U>(
  iter: Iterable<T>,
  f: (x: T) => U,
): IterableIterator<U> {
  for (const item of iter) yield f(item);
}

export function* lazyFilter<T>(
  iter: Iterable<T>,
  f: (x: T) => boolean,
): IterableIterator<T> {
  for (const item of iter) {
    if (f(item)) yield item;
  }
}

type Bounce<T> = T | (() => Bounce<T>);

export const trampoline = <T>(fn: (...args: any[]) => Bounce<T>) => {
  return (...args: any[]): T => {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = (result as Function)(); // 여기서 루프를 돌며 스택을 비움
    }
    return result;
  };
};

export function curry2<A, B, Z>(fn: (a: A, b: B) => Z) {
  return (a: A) => (b: B) => fn(a, b);
}

export function curry3<A, B, C, Z>(fn: (a: A, b: B, c: C) => Z) {
  return (a: A) => (b: B) => (c: C) => fn(a, b, c);
}

export function curry4<A, B, C, D, Z>(fn: (a: A, b: B, c: C, d: D) => Z) {
  return (a: A) => (b: B) => (c: C) => (d: D) => fn(a, b, c, d);
}

export function curry5<A, B, C, D, E, Z>(
  fn: (a: A, b: B, c: C, d: D, e: E) => Z,
) {
  return (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => fn(a, b, c, d, e);
}
