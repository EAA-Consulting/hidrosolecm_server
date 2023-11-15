import { RequiredFieldsValidation } from '../../Presentation/helpers/validation/RequiredFieldsValidation'
import { type Validation } from '../../Presentation/helpers/validation/Validation'
import { ValidationComposite } from '../../Presentation/helpers/validation/ValidationComposite'

export const makeValidationComposite = (): ValidationComposite => {
  const validations: Validation[] = []

  const fields = ['name', 'email', 'password', 'passwordConfirmation']
  for (const field of fields) {
    validations.push(new RequiredFieldsValidation(field))
  }

  return new ValidationComposite(validations)
}
