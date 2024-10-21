import { CreateCustomerController } from "./presentation/controller/create.customer.controller";
import { SQLiteCustomerRepository } from "./infra/repositories/sqlite.customer.respository";
import { CreateCustomerUseCase } from "./app/usecase/create.customer.usecase";
import { AuthCustomerMiddleware } from "./presentation/middlewares/auth.customer.middleware";
import { JsonWebTokenProvider } from "./infra/jwt/providers/jwt.provider";
import { AuthCustomerUseCase } from "./app/usecase/auth.customer.usecase";
import { AuthCustomerController } from "./presentation/controller/auth.customer.controller";
import { PasswordHashProvider } from "./infra/providers/password.hesher.provider";
import { QueueSQSProvider } from "./infra/queue/provider/queue.sqs.provider";
import aws from "./infra/aws/credentials/sqs/aws.credential.sqs";

// Instance of SQS Provider
const queueSQSProvider = new QueueSQSProvider(aws, aws.queueUrl)
// Instance of SQLite Repository
const sqliteCustomerRepository = new SQLiteCustomerRepository()

// Instance of Json Web Token Provider
const jsonWebTokenProvider = new JsonWebTokenProvider()

// Instance Password Hash Provider
const passwordHashProvider = new PasswordHashProvider()

// Instance Create Customer
const createCustomerUseCase = new CreateCustomerUseCase(
  sqliteCustomerRepository,
  passwordHashProvider,
  queueSQSProvider
)
const createCustomerController = new CreateCustomerController(
  createCustomerUseCase
)

// Instance of AuthCustomerMiddleware
const authCustomerMiddleware = new AuthCustomerMiddleware(
  jsonWebTokenProvider
)

// Instance Login Customer
const authCustomerUseCase = new AuthCustomerUseCase(
  sqliteCustomerRepository,
  jsonWebTokenProvider,
  passwordHashProvider
)
const authCustomerController = new AuthCustomerController(
  authCustomerUseCase
)


export { 
  // Export Customers Controllers
  createCustomerController, 
  // Export Auth Customer Middleware
  authCustomerMiddleware,

  // Export Auth Customer Middleware
  authCustomerController
}
