import { Request, Response, NextFunction } from 'express';

export const Auth = {
   private: (req: Request, res: Response, next: NextFunction) => {
      let sucess = false;

      // Fazer verificação de auth
      if (sucess) {
         next();
      } else {
         res.status(403).json({ error: 'Não autorizado' });
      }
   }
}