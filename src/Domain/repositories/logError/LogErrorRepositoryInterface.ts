export interface ILogErrorRepository {
  log: (stack: string, message: string) => Promise<void>
}
