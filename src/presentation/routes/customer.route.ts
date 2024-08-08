import { Request, Response, Router } from "express"
import { createCustomerController, authCustomerController } from "../.."

const CostumerRouter = Router()

CostumerRouter.post(
  "/auth", 
  (request: Request, response: Response) => 
    authCustomerController.handle(request, response)
)

CostumerRouter.post("/create", 
  (request: Request, response: Response,) => createCustomerController.handle(request, response)
)

export { CostumerRouter } 
