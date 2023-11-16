import { MissingParamError } from '../../errors'
import { RequiredFieldsValidation } from './RequiredFieldsValidation'

describe('Required field validation', () => {
  test('Return Missing param error if no field is passed', () => {
    const sut = new RequiredFieldsValidation('field')

    const error = sut.validate({ name: 'name' })
    expect(error).toEqual(new MissingParamError('field'))
  })
  test('Return null if field is passed', () => {
    const sut = new RequiredFieldsValidation('field')

    const error = sut.validate({ field: 'field' })
    expect(error).toBeFalsy()
  })
})
