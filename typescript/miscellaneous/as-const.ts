/* eslint-disable @typescript-eslint/consistent-type-definitions */
const request = {
  credentials: 'omit'
} as const

type RequestAsConst = {
  readonly credentials: 'omit'
}
