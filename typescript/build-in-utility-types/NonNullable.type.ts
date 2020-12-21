export type NonNullable<Union> = Union extends null | undefined ? never : Union

export type NullableFruit = 'banana' | 'apple' | undefined | null

export type Fruit = NonNullable<NullableFruit>

export const nonNullableFruit: Fruit = 'apple'
