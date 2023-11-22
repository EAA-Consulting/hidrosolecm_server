import { InvalidParamError } from '../../errors'
import { EmailValidatorAdapter } from '../../utils/EmailValidatorAdapter'
import { EmailValidation } from './EmailValidation'

describe('Email Validation', () => {
  test('Should return an error if EmailValidator returns false', () => {
    const sut = new EmailValidation('email', new EmailValidatorAdapter())
    const error = sut.validate({ email: 'invalid_email' })
    expect(error).toEqual(new InvalidParamError('Email is not valid'))
  })
  test('Should return NULL if EmailValidator is valid', () => {
    const sut = new EmailValidation('email', new EmailValidatorAdapter())
    const error = sut.validate({ email: 'valid@gmail.com' })
    expect(error).toBeFalsy()
  })
})
