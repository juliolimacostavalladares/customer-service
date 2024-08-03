import { Request, Response, Router } from "express"
import { createCustomerController } from "../.."

const CostumerRouter = Router()

CostumerRouter.post("/create", (request: Request, response: Response) => createCustomerController.handle(request, response))

export { CostumerRouter } 
