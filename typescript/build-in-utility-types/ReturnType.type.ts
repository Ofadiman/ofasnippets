export type ReturnType<Function extends (...args: never) => unknown> = Function extends (...args: never) => infer R
  ? R
  : unknown

declare function fn(name: string): string

export const fnReturn: ReturnType<typeof fn> = 'ofadiman'
