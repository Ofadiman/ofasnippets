/* eslint-disable @typescript-eslint/consistent-type-definitions */
type Options = 'color' | 'shade'

type Theme = {
  [Option in Options]: string
}

type ThemeEquals = {
  color: string
  shade: string
}
