import { type Controller } from '../../Presentation/interfaces/controller'

import type { Request, RequestHandler, Response } from 'express'

export const expressAdapterController = (controller: Controller): RequestHandler => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: req.body,
      file: req.file,
      params: req.params,
      headers: req.headers

    }

    try {
      const httpResponse = await controller.handle(httpRequest)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } catch (error) {

    }
  }
}
