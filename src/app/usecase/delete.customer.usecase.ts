import { DeleteDeleteDTO } from "../dtos/delete.customer.dto";
import { CustomerErrorType } from "../enums/customer.erros.enum";
import { ICustomerRepository } from "../repositories/customer.repository";

class DeleteCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository,
  ) { }
  

  async execute({ id }: DeleteDeleteDTO) {

    const customerExist = await this.customerRepository.findById(id)

    if(!customerExist) {
      throw new Error(CustomerErrorType.CustomerDoesNotExist)
    }
    
    this.customerRepository.delete(id)
  }
}

export { DeleteCustomerUseCase }