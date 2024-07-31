import { CreateCustomerDTO } from "../dtos/create.customer.dto";
import { Customer } from "../entities/customer.entities";
import { CustomerErrorType } from "../enums/customer.erros.enum";
import { ICustomerRepository } from "../repositories/customer.repository";

class CreateCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository
  ) { }

  async execute({ id, email, name, password, role }: CreateCustomerDTO) {

    const customerAlreadyExists = await this.customerRepository.findByEmail(email)

    if(customerAlreadyExists) throw new Error(CustomerErrorType.CustomerAlreadyExists)

    const customer = new Customer({
      id, 
      email, 
      name, 
      password, 
      role
    }) 

    await this.customerRepository.save(customer)

  }
}

export { CreateCustomerUseCase }