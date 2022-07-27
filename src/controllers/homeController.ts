import { Request, Response } from 'express'
import PerguntaModel from '../model/PerguntaModel'

export const homeGet = (req: Request, res: Response) => {
  PerguntaModel.findAll({
    raw: true,
    order: [['id', 'DESC']], // ASC = Crescente, DESC = Decrescente
  }).then((perguntas) => {
    res.locals.perguntas = perguntas
    res.render('home')
  })
}
