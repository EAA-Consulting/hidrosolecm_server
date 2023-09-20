export interface TokenGenerator {
  generate: (payload: string) => Promise<string>
  verify: (token: string) => Promise<boolean>
}
