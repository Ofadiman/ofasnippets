export type InstanceType<Type extends new (...args: never) => unknown> = Type extends new (
  ...args: never
) => infer ReturnedInstance
  ? ReturnedInstance
  : unknown

export class User {
  public name: string
  public age: number

  public constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public getUser(): this {
    return this
  }
}

export type UserInstance = InstanceType<typeof User>

export const userInstance: UserInstance = new User('ofadiman', 24)
