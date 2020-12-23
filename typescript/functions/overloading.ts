interface OverloadConfig {
  domain: string
  port: number
}

export function getConfig(overrides: string): OverloadConfig
export function getConfig(overrides: number): OverloadConfig
export function getConfig(overrides: undefined): OverloadConfig

export function getConfig(overrides: unknown): OverloadConfig {
  const defaultConfig = {
    domain: 'http://localhost',
    port: 3000
  }

  if (typeof overrides === 'string') {
    return {
      ...defaultConfig,
      domain: overrides
    }
  }

  if (typeof overrides === 'number') {
    return {
      ...defaultConfig,
      port: overrides
    }
  }

  if (typeof overrides === 'undefined') {
    return defaultConfig
  }

  throw new Error('Incorrect argument format!')
}
