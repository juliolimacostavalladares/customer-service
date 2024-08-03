import { CustomerRole } from "../enums/customer.role.enum";

export interface  CreateCustomerDTO {
  id: string,
  email: string,
  name: string,
  password: string,
  role: CustomerRole
}