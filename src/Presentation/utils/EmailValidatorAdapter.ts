import { type EmailValidator } from '../interfaces/emailValidator'
import validator from 'validator'
export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
