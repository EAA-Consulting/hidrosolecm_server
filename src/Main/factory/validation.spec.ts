import { CompareFieldsValidation } from '../../Presentation/helpers/validation/CompareFieldsValidation'
import { EmailValidation } from '../../Presentation/helpers/validation/EmailValidation'
import { RequiredFieldsValidation } from '../../Presentation/helpers/validation/RequiredFieldsValidation'
import { type Validation } from '../../Presentation/helpers/validation/Validation'
import { ValidationComposite } from '../../Presentation/helpers/validation/ValidationComposite'
import { EmailValidatorAdapter } from '../../Presentation/utils/EmailValidatorAdapter'
import { makeValidationComposite } from './validation'
jest.mock('../../Presentation/helpers/validation/ValidationComposite')

describe('Validation Factory', () => {
  test('Ensure validation is called with Validations modules', async () => {
    makeValidationComposite()

    const validations: Validation[] = [new RequiredFieldsValidation('name'), new RequiredFieldsValidation('email'), new RequiredFieldsValidation('password'), new RequiredFieldsValidation('passwordConfirmation')]
    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
