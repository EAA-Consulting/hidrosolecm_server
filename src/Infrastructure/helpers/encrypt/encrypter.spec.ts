import bcrypt from 'bcrypt'
import { type Encrypter } from '../../../Application/use-cases/interfaces/encrypter'
import { EncrypterAdapter } from './encrypterAdapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => { resolve('hashed_password') })
  },
  async compare (): Promise<boolean> {
    return await new Promise(resolve => { resolve(true) })
  }
}))

describe('Encrypter', () => {
  const makeSut = (): Encrypter => {
    return new EncrypterAdapter(12)
  }

  test('Should encrypted value', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any-_value')
    expect(hash).toBe('hashed_password')
  })
  test('Should call Bcrypt with correct value', async () => {
    const sut = makeSut()
    const bcryptSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(bcryptSpy).toHaveBeenCalledWith('any_value', 12)
  })
  test('Should return hashed value when success', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hashed_password')
  })

  test('Should return true if password matchs', async () => {
    const sut = makeSut()
    const passwordHashed = await sut.encrypt('any_value')
    const isValid = await sut.validate('any_value', passwordHashed)

    expect(isValid).toBe(true)
  })

  test('Should return false if password does not match', async () => {
    const sut = makeSut()
    const isValid = await sut.validate('any_value', 'wrong value')
    expect(isValid).toBe(true)
  })
}
)
