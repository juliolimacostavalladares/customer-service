import { randomUUID } from "crypto"
import { CustomerRole } from "../enums/customer.role.enum"

class Customer {
  public readonly id?: string
  public name: string
  public email: string
  public password: string
  public role: CustomerRole

  constructor({ name, email, password, role }: Customer) {
    this.name = name
    this.email = email
    this.password = password
    this.role = role

    if(!this.id) {
      this.id = randomUUID()
    }
  }
}

export { Customer }
