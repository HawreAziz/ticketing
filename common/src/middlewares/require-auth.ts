import { Request, Response, NextFunction } from 'express';
import { AuthorizationError } from '../';


export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) {
    throw new AuthorizationError('User not authorized');
  }
  next();
}
