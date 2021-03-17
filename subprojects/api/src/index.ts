import express from 'express'
import cors from 'cors'
import { applyAdaptors } from './server/adaptors'
import router from './server/adaptors/routers';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
applyAdaptors(app)
app.use('/api', router)

export default app
