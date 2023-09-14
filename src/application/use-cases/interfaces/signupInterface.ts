export interface SignUpApplication {
  handle: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<boolean>
}
