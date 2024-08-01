import { CreateCustomerController } from "./controller/create.customer.controller";
import { DeleteCustomerController } from "./controller/delete.customer.controller";
import { SQLiteCustomerRepository } from "./repositories/sqlite.customer.respository";
import { CreateCustomerUseCase } from "./usecase/create.customer.usecase";
import { DeleteCustomerUseCase } from "./usecase/delete.customer.usecase";

// Instance of SQLite Repository
const sqliteCustomerRepository = new SQLiteCustomerRepository()

// Instance Create Customer
const createCustomerUseCase = new CreateCustomerUseCase(
  sqliteCustomerRepository
)
const createCustomerController = new CreateCustomerController(
  createCustomerUseCase
)

// Instance Delete Customer
const deleteCustomerUseCase = new DeleteCustomerUseCase(
  sqliteCustomerRepository
)
const deleteCustomerController = new DeleteCustomerController(
  deleteCustomerUseCase
)

// Export Customers Controllers
export { createCustomerController, deleteCustomerController }
