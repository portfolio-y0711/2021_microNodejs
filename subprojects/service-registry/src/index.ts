import express from 'express'
import router from './server/routers'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/register', router)

export default app

