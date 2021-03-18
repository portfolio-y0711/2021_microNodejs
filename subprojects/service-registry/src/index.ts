import express from 'express'
import router from './server/routers'

const app = express()

app.use('/register', router)

