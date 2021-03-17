import express from 'express'
import cors from 'cors'
import { applyAdaptors } from './server/adaptors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
applyAdaptors(app)

export default app
