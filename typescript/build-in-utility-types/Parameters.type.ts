export type Parameters<Function extends (...args: never) => unknown> = Function extends (...args: infer Arg) => unknown
  ? Arg
  : never

declare function fn(name: string, age: number): void

export type FnParams = Parameters<typeof fn>

export const fnParams: FnParams = ['name', 15]
