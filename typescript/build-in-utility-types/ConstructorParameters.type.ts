export type ConstructorParameters<ClassType extends new (...args: never) => unknown> = ClassType extends new (
  ...args: infer Arg
) => unknown
  ? Arg
  : never

export class User {
  public constructor(private readonly name: string, private readonly age: number) {}
}

export type UserParams = ConstructorParameters<typeof User>

export const userParams: UserParams = ['ofadiman', 24]
