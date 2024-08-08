import { Request, Response } from "express";
import { AuthCustomerUseCase } from "../../app/usecase/auth.customer.usecase";
import { Customer } from "../../domain/entities/customer.entities";
import { ICustomResponse } from "../interface/custom.response";

class AuthCustomerController {
  constructor(
    private authCustomerUseCase: AuthCustomerUseCase
  ) {}

  async handle(request: Request, response: Response<ICustomResponse<{token: string}>>): Promise<Response> {
    const { email, name, password } = request.body as Customer
    
    try {
      const token = await this.authCustomerUseCase.execute({
        email,
        name, 
        password: password as string
      })

      return response.status(200).json({
       success: true,
       message: "Success",
       data: {
          token
       }
      })

    } catch (error) {
      return response.status(403).json({
        success: false,
        message: "" + error
       })
    }
  }
}

export { AuthCustomerController }