import { type Validation } from './Validation'
export class RequiredFieldsValidation implements Validation {
  constructor (private readonly fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): Error | null {
    if (!input[this.fieldName]) {
      return new Error(`Missing param: ${this.fieldName}`)
    }
    return null
  }
}
