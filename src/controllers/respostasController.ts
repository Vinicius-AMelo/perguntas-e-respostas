import { Request, Response } from 'express'
import PerguntaModel from '../model/PerguntaModel'
import RespostaModel from '../model/RespostaModel'

export const respostasGET = (req: Request, res: Response) => {
  const { id } = req.params
  PerguntaModel.findOne({
    where: {
      id,
    },
    raw: true,
  }).then((pergunta) => {
    res.locals.pergunta = pergunta
  })
  RespostaModel.findAll({
    where: {
      perguntaID: id,
    },
    raw: true,
    order: [['id', 'DESC']],
  }).then((respostas) => {
    console.log(respostas)
    res.locals.respostas = respostas
    res.render('respostas')
  })
}

export const respostasPost = (req: Request, res: Response) => {
  const id = req.body.perguntaID
  RespostaModel.create({
    corpo: req.body.corpo,
    perguntaID: req.body.perguntaID,
  }).then(() => {
    res.redirect(`pergunta/${id}`)
  })
}
