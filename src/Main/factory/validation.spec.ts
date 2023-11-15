import { RequiredFieldsValidation } from '../../Presentation/helpers/validation/RequiredFieldsValidation'
import { ValidationComposite } from '../../Presentation/helpers/validation/ValidationComposite'
import { makeValidationComposite } from './validation'
jest.mock('../../Presentation/helpers/validation/ValidationComposite')

describe('Validation Factory', () => {
  test('should first', async () => {
    makeValidationComposite()

    expect(ValidationComposite).toHaveBeenCalledWith([new RequiredFieldsValidation('name'), new RequiredFieldsValidation('email'), new RequiredFieldsValidation('password'), new RequiredFieldsValidation('passwordConfirmation')])
  })
})
