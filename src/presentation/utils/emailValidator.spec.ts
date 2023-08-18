import { EmailValidatorAdapter } from './EmailValidatorAdapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))
const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('Email Validator', () => {
  test('Should return false if validator returns false', () => {
    // sut = system under test
    jest.clearAllMocks()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const sut = makeSut()
    const isValid = sut.isValid('edi_email@gmail.com')

    expect(isValid).toBe(false)
  })
  test('Should return true if validator returns false', () => {
    // sut = system under test
    const sut = makeSut()
    const isValid = sut.isValid('edi_email@gmail.com')

    expect(isValid).toBe(true)
  })
})
