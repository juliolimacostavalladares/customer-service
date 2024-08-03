import { Request, Response } from "express";
import { CreateCustomerUseCase } from "../../app/usecase/create.customer.usecase";
import { Customer } from "../../domain/entities/customer.entities";
import { CustomerErrorType } from "../../domain/enums/customer.erros.enum";

class CreateCustomerController {
  constructor(
    private createCustomerUseCase: CreateCustomerUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email, name, password, role } = request.body as Customer
    
    try {
      await this.createCustomerUseCase.execute({
        id: id as string, 
        email, 
        name, 
        password, 
        role
      })

      return response.status(201).json({
        message: "ok",
       })
    } catch (error) {
     return response.status(400).json({
      message: CustomerErrorType.UnableToCreateCustomers,
      error: String(error)
     })
    }
  }
}

export { CreateCustomerController }