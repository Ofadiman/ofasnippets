export type Extract<Type, Union> = Type extends Union ? Type : never

export type Roles = 'user' | 'client' | 'admin'

export type Admin = Extract<Roles, 'admin'>

export const user: Admin = 'admin'
