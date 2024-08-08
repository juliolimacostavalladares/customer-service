import { CreateCustomerController } from "./presentation/controller/create.customer.controller";
import { SQLiteCustomerRepository } from "./infra/repositories/sqlite.customer.respository";
import { CreateCustomerUseCase } from "./app/usecase/create.customer.usecase";
import { PasswordHashProvider } from "./infra/providers/password.hesher.provider";

// Instance of SQLite Repository
const sqliteCustomerRepository = new SQLiteCustomerRepository()

// Instance Create Customer
const passwordHashProvider = new PasswordHashProvider()

// Instance Create Customer
const createCustomerUseCase = new CreateCustomerUseCase(
  sqliteCustomerRepository,
  passwordHashProvider
)
const createCustomerController = new CreateCustomerController(
  createCustomerUseCase
)

// Export Customers Controllers
export { createCustomerController }
