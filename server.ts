import express, { urlencoded } from 'express'
import path from 'path'
import route from './src/routes'
// import { middleareGlobal } from './middlewares/middlewares'
import sequelizeConnection from './src/model/database'
import PerguntaModel from './src/model/PerguntaModel'
import RespostaModel from './src/model/RespostaModel'

const app = express()
const porta = 3000

sequelizeConnection
  .authenticate()
  .then(() => {
    app.emit('DB Connected')
  })
  .catch((e) => console.log(e))

PerguntaModel.sync({ force: false }).then(() => {
  console.log('Tabela Pergunta Criada')
})
RespostaModel.sync({ force: false }).then(() => {
  console.log('Tabela Resposta Criada')
})

app.use(urlencoded({ extended: true }))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, 'public')))

// app.use(middleareGlobal)
// app.use(deleteQuestion)
app.use(route)

app.on('DB Connected', () => {
  app.listen(porta, () => {
    console.log('\x1b[33m\x1b[1m%s\x1b[0m', `Servidor express rodando na porta: ${porta}`)
    console.log('\x1b[33m\x1b[1m%s\x1b[0m', `Servidor local: http://localhost:${porta}`)
    console.log('\x1b[33m\x1b[1m%s\x1b[0m', `Rede local: 10.0.0.142:${porta}`)
  })
})
