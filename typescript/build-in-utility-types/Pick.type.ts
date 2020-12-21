export type Pick<Type, Keys extends keyof Type> = {
  [Key in Keys]: Type[Key]
}

export class User {
  public readonly id: string = Math.random().toString()
  public name: string
  public age: number

  public constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

export const userOptions: Pick<User, 'age' | 'name'> = { age: 25, name: 'ofadiman' }
