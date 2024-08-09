import { PrismaClient } from "@prisma/client";
import { Customer } from "../../domain/entities/customer.entities";
import { ICustomerRepository } from "../../app/repositories/customer.repository";

class SQLiteCustomerRepository implements ICustomerRepository {
  private prisma = new PrismaClient()
  
  async findByEmail(email: string): Promise<Customer>  {
    const customer = await this.prisma.customer.findFirst({where: {
      email: email
    }})
    return customer as Customer
  }

  async save({ id, email, name, password}: Customer): Promise<Customer> {
    try {
      const customer = await this.prisma.customer.create({
        data: {
          id: id as string,
          email,
          name,
          password: password as string,
        }
      })
      
      return customer
    } catch (error) {
      throw(error)
    }
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.prisma.customer.findFirst({where: { id }})
  
    return customer as Customer
  }
}

export { SQLiteCustomerRepository }