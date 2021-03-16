import * as express from 'express'
import * as cors from 'cors'
import router from './server/routers';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', router)

export default app
