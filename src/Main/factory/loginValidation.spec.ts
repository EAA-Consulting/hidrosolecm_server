import { EmailValidation } from '../../Presentation/helpers/validation/EmailValidation'
import { RequiredFieldsValidation } from '../../Presentation/helpers/validation/RequiredFieldsValidation'
import { type Validation } from '../../Presentation/helpers/validation/Validation'
import { ValidationComposite } from '../../Presentation/helpers/validation/ValidationComposite'
import { EmailValidatorAdapter } from '../../Presentation/utils/EmailValidatorAdapter'
import { makeLoginValidation } from './loginValidation'
jest.mock('../../Presentation/helpers/validation/ValidationComposite')

describe('Login Validation Factory', () => {
  test('Ensure login validation is called with Validations modules', async () => {
    makeLoginValidation()

    const validations: Validation[] = [new RequiredFieldsValidation('email'), new RequiredFieldsValidation('password')]
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
