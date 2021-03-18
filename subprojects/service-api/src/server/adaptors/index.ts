import { RegisterRoutes } from './routers/routes'
import * as express from 'express'
import * as path from 'path'
import * as fs from 'fs';
import { distroot, distmoduleroot } from '../../../config/paths';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const applyAdaptors = (app: express.Express) => {
    app.use('/swagger-ui', express.static(path.join(distmoduleroot, './swagger-ui/dist')))
    app.use('/v1/swagger.json', (_: unknown, res: express.Response) => {
        const json = fs.readFileSync(path.join(distroot, './swagger.json'), 'utf8')
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
