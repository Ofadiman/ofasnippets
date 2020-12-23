/* eslint-disable @typescript-eslint/consistent-type-definitions */
type SerializableKeys<Type extends object> = {
  [Key in keyof Type]: Type[Key] extends Function ? never : Key
}[keyof Type]

type Serializable<Type extends object> = {
  [Key in SerializableKeys<Type>]: Type[Key]
}

type NonSerializable = {
  id: string
  log: () => void
  name: string
}

const serializable: Serializable<NonSerializable> = {
  id: '1551',
  name: 'str'
}
