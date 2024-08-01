import { Customer } from "../entities/customer.entities"

export interface ICustomerRepository {
  findByEmail(email: string): Promise<Customer>
  findById(id: string): Promise<Customer>
  save(customer: Customer): Promise<boolean>
  delete(id: string ): Promise<boolean>
}