import { PrismaClient } from "@prisma/client";
import { Customer } from "../../../domain/entities/customer.entities";
import { ICustomerRepository } from "./customer.repository";

class SQLiteCustomerRepository implements ICustomerRepository {
  private prisma = new PrismaClient()
  
  async findByEmail(email: string): Promise<Customer>  {
    const customer = await this.prisma.customer.findFirst({where: {
      email: email
    }})
    return customer as Customer
  }

  async save({ id, email, name, password, role}: Customer): Promise<boolean> {
    try {
      await this.prisma.customer.create({
        data: {
          id: id as string,
          email,
          name,
          password,
          role
        }
      })
      return true
    } catch (error) {
      return false
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.customer.delete({where: { id }})
      return true
    } catch (error) {
      return false
    }
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.prisma.customer.findFirst({where: { id }})
  
    return customer as Customer
  }
}

export { SQLiteCustomerRepository }