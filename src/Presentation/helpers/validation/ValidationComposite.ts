import { type Validation } from './Validation'

export class ValidationComposite implements Validation {
  constructor (private readonly validations: Validation[]) {
    this.validations = validations
  }

  validate (input: any): Error | null {
    for (const validation of this.validations) {
      const error = validation.validate(input)
      if (error) {
        return error
      }
    }
    return null
  }
}
