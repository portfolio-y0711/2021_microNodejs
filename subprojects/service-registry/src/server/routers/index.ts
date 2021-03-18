import { Router } from 'express'
import controller from '../controllers'

const router = Router()

router
    .get('/:srvnm/:srver/:srvprt', controller.get)
    .put('/:srvnm/:srver/:srvprt', controller.register)
    .delete('/:srvnm/:srver/:srvprt', controller.unregister)

export default router
