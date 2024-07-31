import { Router } from "express";
import { CostumerRouter } from "./customer.route";

const router = Router()

router.use(CostumerRouter)

export default router