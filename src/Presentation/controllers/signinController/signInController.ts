import { type SignInApplication } from '../../../Application/use-cases/interfaces/signInInterface'
import { InvalidParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers/httpHelpers'
import { type Controller } from '../../interfaces/controller'
import { type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class SignInController implements Controller {
  constructor (private readonly signInApplication: SignInApplication) { }
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      const account = await this.signInApplication.handle(email, password)

      return success(account)
    } catch (error) {
      if (error.message.includes('credentials')) {
        return badRequest(new InvalidParamError('credentials'))
      }
      if (error.message.includes('User')) {
        return badRequest(new InvalidParamError('User not found'))
      }
      if (error.message.includes('Email')) {
        return badRequest(new InvalidParamError('Email is not valid'))
      }

      return serverError(error)
    }
  }
}
