export type Readonly<Type> = { readonly [Key in keyof Type]: Type[Key] }

export interface Colors {
  primary: string
  secondary: string
}

export const immutableColors: Readonly<Colors> = { primary: 'black', secondary: 'orange' }
