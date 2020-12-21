export type Required<Type> = {
  [Key in keyof Type]-?: Type[Key]
}

export interface OptionalArgs {
  bar?: string
  foo?: string
}

export const requiredArgs: Required<OptionalArgs> = {
  bar: 'bar',
  foo: 'foo'
}
