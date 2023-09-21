import { type SignInApplication } from '../../../Application/use-cases/interfaces/signInInterface'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class SignInController implements Controller {
  constructor (private readonly signInApplication: SignInApplication) { }
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['email', 'password']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { email, password } = httpRequest.body
      const account = await this.signInApplication.handle(email, password)

      return success(account)
    } catch (error) {
      if (error.message.includes('credentials')) {
        return badRequest(new InvalidParamError('credentials'))
      }
      if (error.message.includes('User not found')) {
        return badRequest(new InvalidParamError('User not found'))
      }
      if (error.message.includes('Email')) {
        return badRequest(new InvalidParamError('Email is not valid'))
      }

      return serverError()
    }
  }
}
