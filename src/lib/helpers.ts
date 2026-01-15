export const toString = (value: unknown, orElse: string = ''): string =>
  String(value || orElse);

export const toNumber = (value: unknown, orElse: number = 0): number =>
  Number(value || orElse);

export const toBoolean = (value: unknown): boolean => Boolean(value);
