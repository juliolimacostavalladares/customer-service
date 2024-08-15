import { CreateCustomerDTO } from "../../domain/dtos/create.customer.dto";
import { Customer } from "../../domain/entities/customer.entities";
import { CustomerErrorType } from "../../domain/enums/customer.erros.enum";
import { PasswordHashProvider } from "../../infra/providers/password.hesher.provider";
import { QueueRepository } from "../../infra/queue/repositories/queue.sqs.repository";
import { ICustomerRepository } from "../repositories/customer.repository";


class CreateCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository,
    private passwordHashProvider: PasswordHashProvider,
    private queueRepository: QueueRepository
  ) { }

  async execute({ id, email, name, password }: CreateCustomerDTO): Promise<Customer> {

    const emailAlreadyExists = await this.customerRepository.findByEmail(email)

    if(emailAlreadyExists) throw new Error(CustomerErrorType.CustomerAlreadyExists)
    
    const passwordHashed = await this.passwordHashProvider.hashPassword(password)

    const customer = new Customer({
      id, 
      email, 
      name, 
      password: passwordHashed, 
    }) 

    await this.customerRepository.save(customer)

    this.queueRepository.sendMessageToQueue(JSON.stringify({
      id: customer.id,
      email: customer.email,
      name: customer.name
    }))

    return customer
  }
}

export { CreateCustomerUseCase }