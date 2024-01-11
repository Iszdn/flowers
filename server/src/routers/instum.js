import { Router } from 'express'
import { createFlowers, deleteFlowers, getFlowers, getFlowersById } from '../controllers/instum.js'
const router = Router()

// middleware that is specific to this router
router.post("/" , createFlowers)
router.get("/:id" , getFlowersById)
router.get("/" , getFlowers)
router.delete("/:id" , deleteFlowers)


export default router