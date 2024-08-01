import { Request, Response, Router } from "express"
import { createCustomerController, deleteCustomerController } from ".."

const CostumerRouter = Router()

CostumerRouter.post("/create", (request: Request, response: Response) => createCustomerController.handle(request, response))
CostumerRouter.delete("/delete/:id", (request: Request, response: Response) => deleteCustomerController.handle(request, response))

export { CostumerRouter } 
