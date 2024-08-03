import { Customer } from "../../../domain/entities/customer.entities"

export interface ICustomerRepository {
  findByEmail(email: string): Promise<Customer>
  findById(id: string): Promise<Customer>
  save(customer: Customer): Promise<boolean>
}