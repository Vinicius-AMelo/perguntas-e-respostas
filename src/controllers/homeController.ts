import { Request, Response } from 'express'

export const homeGet = (req: Request, res: Response) => {
  res.render('home')
}
