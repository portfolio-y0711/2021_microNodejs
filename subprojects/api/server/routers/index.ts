import { Request, Response } from 'express'
import { Router } from 'express'

const router = Router()

router.get('/path/:id', (req: Request, res: Response) => {
    res.json('ok')
})

export default router
