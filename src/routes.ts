import express from 'express'
import { homeGet } from './controllers/homeController'
import { respostasGET, respostasPost } from './controllers/respostasController'
import { perguntasGet, perguntasPost } from './controllers/perguntasController'

const route = express.Router()

route.get('/', homeGet)

route.get('/perguntas', perguntasGet)
route.post('/perguntas', perguntasPost)

route.get('/pergunta/:id', respostasGET)
route.post('/pergunta', respostasPost)

export = route
