import { NextFunction, Request, Response } from "express";
import { JsonWebTokenProvider } from "../../infra/jwt/providers/jwt.provider";
import { ICustomResponse } from "../interface/custom.response";


class AuthCustomerMiddleware {
  constructor(
    private jsonWebTokenProvider: JsonWebTokenProvider
  ) {}

  handle (request: Request, response: Response<ICustomResponse<null>>, next: NextFunction) {
    const jwt = request.header('Authorization') as string
    try {
      this.jsonWebTokenProvider.verifyToken(jwt)
      return next();
    } catch (error) {
      return response.status(403).json({
        success: false,
        message: "" + error
      })
    }
  }
}

export { AuthCustomerMiddleware }