import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './CompareFieldsValidation'

describe('Compare fields validation', () => {
  test('Return error Invalid param error if fiels are not equal', () => {
    const sut = new CompareFieldsValidation('password', 'passwordConfirmation')

    const error = sut.validate({ password: '1234', passwordConfirmation: '12' })

    expect(error).toEqual(new InvalidParamError('passwordConfirmation'))
  })
  test('Return null if fiedls are equal', () => {
    const sut = new CompareFieldsValidation('password', 'passwordConfirmation')

    const error = sut.validate({ password: '1234', passwordConfirmation: '1234' })

    expect(error).toBeFalsy()
  })
})
