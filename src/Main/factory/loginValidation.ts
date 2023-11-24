import { EmailValidation } from '../../Presentation/helpers/validation/EmailValidation'
import { RequiredFieldsValidation } from '../../Presentation/helpers/validation/RequiredFieldsValidation'
import { type Validation } from '../../Presentation/helpers/validation/Validation'
import { ValidationComposite } from '../../Presentation/helpers/validation/ValidationComposite'
import { EmailValidatorAdapter } from '../../Presentation/utils/EmailValidatorAdapter'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  const fields = ['email', 'password']
  for (const field of fields) {
    validations.push(new RequiredFieldsValidation(field))
  }

  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
