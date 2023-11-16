import { InvalidParamError } from '../../errors'
import { EmailValidatorAdapter } from '../../utils/EmailValidatorAdapter'
import { CompareFieldsValidation } from './CompareFieldsValidation'
import { EmailValidation } from './EmailValidation'
import { RequiredFieldsValidation } from './RequiredFieldsValidation'
import { type Validation } from './Validation'
import { ValidationComposite } from './ValidationComposite'

describe('Validation composite', () => {
  test('Ensure Validation composite returns error if any validation fails', () => {
    const requiredFieldValidation = new RequiredFieldsValidation('field')
    const compareFieldsValidation = new CompareFieldsValidation('field', 'fieldToCompare')
    const emailValidation = new EmailValidation('email', new EmailValidatorAdapter())

    const validations: Validation[] = [requiredFieldValidation, compareFieldsValidation, emailValidation]
    const sut = new ValidationComposite(validations)

    const error = sut.validate({ field: 'any_value', fieldToCompare: 'any_value', email: 'invalidEmail' })

    expect(error).toEqual(new InvalidParamError('Email is not valid'))
  })

  test('Ensure Validation composite returns null  if all validation pass', () => {
    const requiredFieldValidation = new RequiredFieldsValidation('field')
    const compareFieldsValidation = new CompareFieldsValidation('field', 'fieldToCompare')
    const emailValidation = new EmailValidation('email', new EmailValidatorAdapter())

    const validations: Validation[] = [requiredFieldValidation, compareFieldsValidation, emailValidation]
    const sut = new ValidationComposite(validations)

    const error = sut.validate({ field: 'any_value', fieldToCompare: 'any_value', email: 'validEmail@test.com' })

    expect(error).toBeFalsy()
  })
})
