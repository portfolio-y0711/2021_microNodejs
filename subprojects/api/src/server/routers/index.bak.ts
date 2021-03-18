import { Router, Request } from 'express'
import * as path from 'path'
import * as fs from 'fs'
import { root } from '../../../config/paths'

const router = Router()

// const asyncHandler = (promisify: (httpRequest: any) => Promise<any>) => async(req: Request, res: any) => {
//     const httpRequest = {
//         // body: req.body,
//         // query: req.query,
//         params: req.params,
//     }
//     return promisify(httpRequest)
//         .then(httpResponse => {
//             if (httpResponse.headers) {
//                 res.set("Access-Control-Allow-Origin", "*");
//                 res.set(httpResponse.headers);
//             }
//             res.type("json");
//             res.status(httpResponse.statusCode)
//                 .send(httpResponse.body)
//         }).catch((e) => {
//             res.sendStatus(500)
//         })
// }

// module.exports = asyncHandler

// const pathController = (service: any) => {
//     const getPathHandler = async(httpRequest: any) => {
//         const { id } = httpRequest.params
//         let result
//         try {
//             result = await service.getPath(id)
//         } catch(e) {
//             console.log(e)
//         }
//         const httpResponse = {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             statusCode: 200,
//             body: result
//         }
//         return httpResponse
//     }
//     const getPath = asyncHandler(getPathHandler)
//     return {
//         getPath
//     }
// }

// module.exports = pathController(pathService)




// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/path/:id', async(req: Request, res: any) => {
    const { id } = req.params
    const data = fs.readFileSync(path.join(root, '../data/files.json'), 'utf-8')
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
