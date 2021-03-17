import { Router, Request } from 'express'
import * as path from 'path'
import * as fs from 'fs'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/path/:id', async(req: Request, res: any) => {
    const { id } = req.params
    const data = fs.readFileSync(path.join(__dirname, '../../../src/server/data/files.json'), 'utf-8')
    let queryString = ''

    switch(id) {
        case '0': 
            queryString = 'queryRoot'
            break
    default:
            queryString = `query${id}`
            break
    }
    const result = await new Promise(res => setTimeout(res, 1000, (JSON.parse(data)[`${queryString}`])))
    res.json(result)
})

export default router
