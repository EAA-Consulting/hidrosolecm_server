import { type SignUpApplication } from '../../../Application/use-cases/interfaces/signupInterface'
import { InvalidParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers/httpHelpers'
import { type Validation } from '../../helpers/validation/Validation'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class SignUpController implements Controller {
  constructor (private readonly signupApplication: SignUpApplication, private readonly validation: Validation) {
    this.signupApplication = signupApplication
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email, password } = httpRequest.body

      const accountModel = await this.signupApplication.handle(name, email, password)

      return success(accountModel)
    } catch (error) {
      if (error.message.includes('Email is not valid')) {
        return badRequest(new InvalidParamError('Email is not valid'))
      }
      if (error.message.includes('exists')) {
        return badRequest(new InvalidParamError('User already exists'))
      }
      return serverError(error)
    }
  }
}
