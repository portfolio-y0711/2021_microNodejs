import { Request } from 'express'

const asyncHandler = (promisify: (_: any) => Promise<any>) =>  async(req: Request, res: any) => {
    const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params
    }
    return promisify(httpRequest)
        .then(httpResponse => {
            if (httpResponse.headers) {
                res.set("Access-Control-Allow-Origin", "*")
                res.set(httpResponse.headers)
            }
            res.type("json")
            res.status(httpResponse.statusCode)
                .send(httpResponse.body)
        }).catch((e) => {
            res.sendStatus(500)
        })
}

export {
    asyncHandler
}
