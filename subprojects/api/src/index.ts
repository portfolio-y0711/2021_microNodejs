import * as express from 'express'
import * as cors from 'cors'
import * as router from './server/routers';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', router.default)

export default app
