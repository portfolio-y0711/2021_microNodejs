import { Router } from 'express'
import { pathController } from '../controllers'

const router = Router()

router
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    .get('/path/:id', pathController.getPath)

export default router
