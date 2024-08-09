import { Request, Response } from "express";
import { CreateCustomerUseCase } from "../../app/usecase/create.customer.usecase";
import { Customer } from "../../domain/entities/customer.entities";
import { ICustomResponse } from "../interface/custom.response";

class CreateCustomerController {
  constructor(
    private createCustomerUseCase: CreateCustomerUseCase
  ) {}

  async handle(request: Request, response: Response<ICustomResponse<Customer>>): Promise<Response> {
    const { id, email, name, password } = request.body as Customer
    
    try {
      const customer = await this.createCustomerUseCase.execute({
        id: id as string, 
        email, 
        name, 
        password: password as string, 
      })
      delete customer.password
      
      return response.status(201).json({
        success: true,
        message: "Success",
        data: customer
      })
    } catch (error) {
      return response.status(400).json({
        success: false,
        message: "" + error
      })
    }
  }
}

export { CreateCustomerController }