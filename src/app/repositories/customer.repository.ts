import { Customer } from "../entities/customer.entities"


export interface ICustomerRepository {
  findByEmail(email: string): Promise<Customer>
  save(customer: Customer): Promise<boolean>
}