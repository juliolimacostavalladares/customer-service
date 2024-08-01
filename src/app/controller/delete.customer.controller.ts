import { Request, Response } from "express";
import { DeleteCustomerUseCase } from "../usecase/delete.customer.usecase";

class DeleteCustomerController {
  constructor(
    private deleteCustomerUseCase: DeleteCustomerUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    
    try {
      await this.deleteCustomerUseCase.execute({
        id
      })
      return response.status(200).json({
        message: "Customer deleted " + id,
      })
    } catch (error) {
      return response.status(404).json({
        message: "Customer not found",
        error: String(error)
      })
    }
  }
}

export { DeleteCustomerController }