import express from 'express'
import cors from 'cors'
import router from './server/routers'
import { applyAdaptors } from './server/adaptors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/v0/api', router)
applyAdaptors(app)

export default app
