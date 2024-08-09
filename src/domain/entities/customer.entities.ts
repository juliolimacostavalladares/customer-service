import { randomUUID } from "crypto"

class Customer {
  public readonly id?: string
  public name: string
  public email: string
  public password?: string

  constructor({ name, email, password }: Customer) {
    this.name = name
    this.email = email
    this.password = password

    if(!this.id) {
      this.id = randomUUID()
    }
  }
}

export { Customer }
