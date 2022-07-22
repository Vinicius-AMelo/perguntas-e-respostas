import express from 'express'
import { homeGet } from './controllers/homeController'
import { perguntasGet, perguntasPost } from './controllers/perguntasController'

const route = express.Router()

route.get('/', homeGet)

route.get('/perguntas', perguntasGet)
route.post('/perguntas', perguntasPost)

export = route
