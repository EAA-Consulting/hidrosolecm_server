import { MissingParamError } from '../../errors'
import { type Controller } from '../../protocols/controller'
import { type EmailValidator } from '../../protocols/emailValidator'
import { badRequest, successRequest, type HttpRequest, type HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, email, password, passwordConfirmation } = httpRequest.body
    if (!name || !email || !password || !passwordConfirmation) {
      return badRequest(new MissingParamError('Missing param: name'))
    }
    if (!this.emailValidator.isValid(httpRequest.body.email)) {
      return badRequest(new MissingParamError('Email is not valid'))
    }

    return successRequest({})
  }
}
