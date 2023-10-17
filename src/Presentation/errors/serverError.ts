export class ServerError extends Error {
  constructor (message?: string, stack?: string) {
    super('Internal server error')
    this.name = 'ServerError'
    this.stack = stack
    this.message = message ?? ''
  }
}
