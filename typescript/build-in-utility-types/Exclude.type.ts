export type Exclude<Type, Union> = Type extends Union ? never : Type

export type Roles = 'user' | 'client' | 'admin'

export type NonAdmin = Exclude<Roles, 'admin'>

export const user: NonAdmin = 'client'
