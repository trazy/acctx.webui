export enum OptionType {
  None = 'None',
  Some = 'Some',
}
export type None = { readonly _tag: OptionType.None };
export type Some<T> = { readonly _tag: OptionType.Some; readonly value: T };
export type Option<T> = None | Some<T>;

export const Option = {
  none: (): None => ({ _tag: OptionType.None }),

  some: <T>(value: T): Some<T> => ({
    _tag: OptionType.Some,
    value,
  }),

  isNone: <T>(opt: Option<T>): opt is None => opt._tag === 'None',

  map:
    <T, U>(f: (value: T) => U) =>
    (opt: Option<T>): Option<U> => {
      return Option.isNone(opt) ? Option.none() : Option.some(f(opt.value));
    },

  chain:
    <T, U>(f: (value: T) => Option<U>) =>
    (opt: Option<T>): Option<U> => {
      return Option.isNone(opt) ? Option.none() : f(opt.value);
    },

  fold:
    <T, U>(onNone: () => U, onSome: (value: T) => U) =>
    (opt: Option<T>): U => {
      return Option.isNone(opt) ? onNone() : onSome(opt.value);
    },

  fromNullable: <T>(value: T | null | undefined): Option<T> => {
    return value === null || value === undefined
      ? Option.none()
      : Option.some(value);
  },

  fromPredicate:
    <T>(predicate: (value: T) => boolean) =>
    (value: T): Option<T> => {
      return predicate(value) ? Option.some(value) : Option.none();
    },

  nonEmptyString: (s: string | null | undefined): Option<string> => {
    return typeof s === 'string' && s.trim().length > 0
      ? Option.some(s)
      : Option.none();
  },

  nonEmptyArray: <T>(arr: T[] | null | undefined): Option<T[]> => {
    return Array.isArray(arr) && arr.length > 0
      ? Option.some(arr)
      : Option.none();
  },
};
