import * as express from 'express'
import * as cors from 'cors'
import { applyAdaptors } from './server/adaptors'
import * as router from './server/adaptors/routers';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
applyAdaptors(app)
app.use('/api', router.default)

export default app
