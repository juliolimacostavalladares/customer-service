import { CreateCustomerController } from "./presentation/controller/create.customer.controller";
import { SQLiteCustomerRepository } from "./infra/database/repositories/sqlite.customer.respository";
import { CreateCustomerUseCase } from "./app/usecase/create.customer.usecase";

// Instance of SQLite Repository
const sqliteCustomerRepository = new SQLiteCustomerRepository()

// Instance Create Customer
const createCustomerUseCase = new CreateCustomerUseCase(
  sqliteCustomerRepository
)
const createCustomerController = new CreateCustomerController(
  createCustomerUseCase
)


// Export Customers Controllers
export { createCustomerController }
