import { LogRepository } from './logRepository'

describe('LogRepository', () => {
  test('Should get error on try to log without open connection', () => {
    const sut = new LogRepository()
    const promise = sut.log('any_stack', 'any_message')
    expect(promise).rejects.toBeInstanceOf(Error)
  })

  test('Should success resolve after log created', () => {
    const sut = new LogRepository()
    const promise = sut.log('any_stack', 'any_message')

    expect(promise).resolves.toBe(null)
  })
})
