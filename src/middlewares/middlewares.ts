import { Request, Response, NextFunction } from 'express'
import PerguntaModel from '../model/PerguntaModel'

export = function middleareGlobal(req: Request, res: Response, next: NextFunction) {
  PerguntaModel.findAll({
    raw: true,
  }).then((users) => {
    res.locals.usuario = users
    next()
  })
}
