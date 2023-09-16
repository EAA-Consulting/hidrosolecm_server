import { type SignUpApplication } from '../../../Application/use-cases/interfaces/signupInterface'
import { InvalidParamError, MissingParamError } from '../../errors'
import { serverError } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { badRequest, successRequest, type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class SignUpController implements Controller {
  signupApplication: SignUpApplication
  constructor (signupApplication: SignUpApplication) {
    this.signupApplication = signupApplication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (!name || !email || !password || !passwordConfirmation) {
        return badRequest(new MissingParamError('Missing param: name'))
      }
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('Password and password confirmation must be equal'))
      }
      try {
        await this.signupApplication.handle(name, email, password, passwordConfirmation)
      } catch (error) {
        if (error.message.includes('Email is not valid')) {
          return badRequest(new InvalidParamError('Email is not valid'))
        }
        throw error
      }

      return successRequest({})
    } catch (error) {
      return serverError()
    }
  }
}
