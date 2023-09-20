export interface Encrypter {
  encrypt: (value: string) => Promise<string>
  validate: (password: string, hash: string) => Promise<boolean>
}
