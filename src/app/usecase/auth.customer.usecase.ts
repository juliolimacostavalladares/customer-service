import { AuthCustomerDTO } from "../../domain/dtos/auth.customer.dto";
import { CustomerErrorType } from "../../domain/enums/customer.erros.enum";
import { JsonWebTokenProvider } from "../../infra/jwt/providers/jwt.provider";
import { ICustomerRepository } from "../repositories/customer.repository";

class AuthCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository,
    private jsonWebTokenProvider: JsonWebTokenProvider
  ) { }

  async execute({ email, name, password }: AuthCustomerDTO): Promise<string> {
    const customerExists = await this.customerRepository.findByEmail(email)

    if(!customerExists) throw new Error(CustomerErrorType.CustomerDoesNotExist)
      
    if(customerExists.password === password && customerExists.name === name) {
      throw new Error('Incorrect username or password')
    }
    
    try {
      const token = this.jsonWebTokenProvider.signToken({
        id: customerExists.id as string,
        email: customerExists.email,
      })
      return token
     } catch (error) {
      throw(error)
     }

  }
}

export { AuthCustomerUseCase }