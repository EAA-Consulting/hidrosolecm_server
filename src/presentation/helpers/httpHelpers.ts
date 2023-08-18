import { ServerError } from '../errors/serverError'
import { type HttpResponse } from '../interfaces/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const success = (data?: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
