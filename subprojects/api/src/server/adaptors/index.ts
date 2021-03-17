import { RegisterRoutes } from './routers/routes'
import * as express from 'express'
import * as path from 'path'
import * as fs from 'fs';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const applyAdaptors = (app: express.Express) => {
    app.use('/swagger-ui', express.static(path.join(__dirname, '../../../src/server/adaptors/swagger-ui')))
    app.use('/v1/swagger.json', (_: unknown, res: express.Response) => {
        const json = fs.readFileSync(path.join(__dirname, '../../../swagger.json'), 'utf8')
        res.send(json)
    });
    app.use('/swagger', (_: unknown, res: express.Response) => {
        res.redirect('/swagger-ui?url=/v1/swagger.json')
    })
    RegisterRoutes(app)
}

export {
    applyAdaptors
}
