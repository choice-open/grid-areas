declare module "tailwindcss/plugin" {
  type CssInJs = {
    [key: string]: string | string[] | CssInJs | CssInJs[]
  }

  interface PluginAPI {
    addBase(base: CssInJs): void
    addVariant(name: string, variant: string | string[] | CssInJs): void
    matchVariant<T = string>(
      name: string,
      cb: (value: T | string, extra: { modifier: string | null }) => string | string[],
      options?: {
        values?: Record<string, T>
        sort?(
          a: { value: T | string; modifier: string | null },
          b: { value: T | string; modifier: string | null }
        ): number
      }
    ): void
    addUtilities(
      utilities: Record<string, CssInJs | CssInJs[]> | Record<string, CssInJs | CssInJs[]>[],
      options?: object
    ): void
    matchUtilities(
      utilities: Record<
        string,
        (value: string, extra: { modifier: string | null }) => CssInJs | CssInJs[]
      >,
      options?: Partial<{
        type: string | string[]
        supportsNegativeValues: boolean
        values: Record<string, string>
        modifiers: "any" | Record<string, string>
      }>
    ): void
    addComponents(
      utilities: Record<string, CssInJs> | Record<string, CssInJs>[],
      options?: object
    ): void
    matchComponents(
      utilities: Record<
        string,
        (value: string, extra: { modifier: string | null }) => CssInJs
      >,
      options?: Partial<{
        type: string | string[]
        supportsNegativeValues: boolean
        values: Record<string, string>
        modifiers: "any" | Record<string, string>
      }>
    ): void
    theme(path: string, defaultValue?: unknown): unknown
    config(path?: string, defaultValue?: unknown): unknown
    prefix(className: string): string
  }

  type PluginFn = (api: PluginAPI) => void

  interface PluginWithConfig {
    handler: PluginFn
    config?: Record<string, unknown>
  }

  interface PluginWithOptions<T> {
    (options?: T): PluginWithConfig
    __isOptionsFunction: true
  }

  interface PluginCreator {
    (handler: PluginFn, config?: Record<string, unknown>): PluginWithConfig
    withOptions<T>(
      pluginFunction: (options?: T) => PluginFn,
      configFunction?: (options?: T) => Record<string, unknown>
    ): PluginWithOptions<T>
  }

  const plugin: PluginCreator
  export default plugin
  export { PluginAPI, PluginFn, PluginWithConfig, PluginWithOptions }
}
