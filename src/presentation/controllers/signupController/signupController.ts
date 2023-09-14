import { type SignUpApplication } from '../../../application/use-cases/interfaces/signupInterface'
import { InvalidParamError, MissingParamError } from '../../errors'
import { type Controller } from '../../interfaces/controller'
import { badRequest, successRequest, type HttpRequest, type HttpResponse } from '../../interfaces/http'

export class SignUpController implements Controller {
  signupApplication: SignUpApplication
  constructor (signupApplication: SignUpApplication) {
    this.signupApplication = signupApplication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, email, password, passwordConfirmation } = httpRequest.body
    if (!name || !email || !password || !passwordConfirmation) {
      return badRequest(new MissingParamError('Missing param: name'))
    }
    if (password !== passwordConfirmation) {
      return badRequest(new InvalidParamError('Password and password confirmation must be equal'))
    }
    if (!await this.signupApplication.handle(name, email, password, passwordConfirmation)) {
      return badRequest(new InvalidParamError('Email is not valid'))
    }

    return successRequest({})
  }
}
