import { CreateCustomerController } from "./controller/create.customer.controller";
import { SQLiteCustomerRepository } from "./repositories/sqlite.customer.respository";
import { CreateCustomerUseCase } from "./usecase/create.customer.usecase";

const sqliteCustomerRepository = new SQLiteCustomerRepository()

const createCustomerUseCase = new CreateCustomerUseCase(
  sqliteCustomerRepository
)

const createCustomerController = new CreateCustomerController(
  createCustomerUseCase
)

export { createCustomerController }
