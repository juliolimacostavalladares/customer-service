import { CreateCustomerDTO } from "../../domain/dtos/create.customer.dto";
import { Customer } from "../../domain/entities/customer.entities";
import { CustomerErrorType } from "../../domain/enums/customer.erros.enum";
import { ICustomerRepository } from "../repositories/customer.repository";

class CreateCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository
  ) { }

  async execute({ id, email, name, password, role }: CreateCustomerDTO): Promise<Customer> {

    const emailAlreadyExists = await this.customerRepository.findByEmail(email)

    if(emailAlreadyExists) throw new Error(CustomerErrorType.CustomerAlreadyExists)

    const customer = new Customer({
      id, 
      email, 
      name, 
      password, 
      role
    }) 

    await this.customerRepository.save(customer)
    return customer
  }
}

export { CreateCustomerUseCase }