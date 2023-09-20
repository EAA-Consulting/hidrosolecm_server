import { type TokenGenerator } from '../interfaces/token'
import { TokenJsonWeToken } from './JsonWebToken'

describe('Json Web Token Generator', () => {
  const makeSut = (): TokenGenerator => {
    return new TokenJsonWeToken()
  }
  test('Should return a valid token on sign', async () => {
    const sut = makeSut()

    const result = await sut.generate('any_id')

    expect(result).toBeTruthy()
    expect(result.length).toBeGreaterThan(10)
  })

  test('Should return true if the token is a valid on verify', async () => {
    const sut = makeSut()

    const token = await sut.generate('any_id')
    const result = await sut.verify(token)

    expect(result).toEqual(true)
  })

  test('Should return false if the token is invalid', async () => {
    const sut = makeSut()
    const result = await sut.verify('invalid_token')
    expect(result).toEqual(false)
  })
})
