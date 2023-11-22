import { CompareFieldsValidation } from '../../Presentation/helpers/validation/CompareFieldsValidation'
import { EmailValidation } from '../../Presentation/helpers/validation/EmailValidation'
import { RequiredFieldsValidation } from '../../Presentation/helpers/validation/RequiredFieldsValidation'
import { type Validation } from '../../Presentation/helpers/validation/Validation'
import { ValidationComposite } from '../../Presentation/helpers/validation/ValidationComposite'
import { EmailValidatorAdapter } from '../../Presentation/utils/EmailValidatorAdapter'

export const makeValidationComposite = (): ValidationComposite => {
  const validations: Validation[] = []

  const fields = ['name', 'email', 'password', 'passwordConfirmation']
  for (const field of fields) {
    validations.push(new RequiredFieldsValidation(field))
  }

  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
