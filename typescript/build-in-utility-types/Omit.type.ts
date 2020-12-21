export type Omit<Type, Key extends keyof Type> = Pick<Type, Exclude<keyof Type, Key>>

export interface FizzBuzz {
  buzz: string
  fizz: string
}

export type Fizz = Omit<FizzBuzz, 'buzz'>

export const fizz: Fizz = { fizz: 'fizz' }
