import { Request, Response } from 'express'
import PerguntaModel from '../model/PerguntaModel'

export const perguntasGet = (req: Request, res: Response) => {
  res.render('perguntas')
}
export const perguntasPost = (req: Request, res: Response) => {
  PerguntaModel.create({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
  }).then(() => {
    res.redirect('/')
  })
}
