export type Record<Keys extends keyof never, Type> = { [Key in Keys]: Type }

export interface Purchase {
  id: number
  name: string
  price: number
}

export const shoppingCart: Record<string, Purchase> = {
  shirt: { id: 161, name: 'nice shirt', price: 15 }
}
