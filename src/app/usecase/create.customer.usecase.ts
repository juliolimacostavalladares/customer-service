import { CreateCustomerDTO } from "../../domain/dtos/create.customer.dto";
import { Customer } from "../../domain/entities/customer.entities";
import { CustomerErrorType } from "../../domain/enums/customer.erros.enum";
import { PasswordHashProvider } from "../../infra/providers/password.hesher.provider";
import { ICustomerRepository } from "../repositories/customer.repository";

class CreateCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository,
    private passwordHashProvider: PasswordHashProvider
  ) { }

  async execute({ id, email, name, password, role }: CreateCustomerDTO) {

    const emailAlreadyExists = await this.customerRepository.findByEmail(email)

    if(emailAlreadyExists) throw new Error(CustomerErrorType.CustomerAlreadyExists)
    
    const passwordHashed = await this.passwordHashProvider.hashPassword(password)

    const customer = new Customer({
      id, 
      email, 
      name, 
      password: passwordHashed, 
      role
    }) 

    await this.customerRepository.save(customer)

  }
}

export { CreateCustomerUseCase }