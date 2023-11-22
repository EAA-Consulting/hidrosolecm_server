import { InvalidParamError } from '../../errors'
import { type EmailValidator } from '../../interfaces/emailValidator'
import { type Validation } from './Validation'

export class EmailValidation implements Validation {
  constructor (private readonly fieldName: string, private readonly emailValidator: EmailValidator) {}
  validate (input: any): Error | null {
    if (!this.emailValidator.isValid(input[this.fieldName])) {
      return new InvalidParamError('Email is not valid')
    }
    return null
  }
}
