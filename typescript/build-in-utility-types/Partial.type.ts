export type Partial<Type> = { [Key in keyof Type]?: Type[Key] }

export interface Theme {
  fontColor: string
  fontSize: string
}

export const updateTheme: Partial<Theme> = { fontSize: '2rem' }

export class User {
  public name: string
  public age: number

  public constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

export const userUpdateDto: Partial<User> = { age: 25 }
