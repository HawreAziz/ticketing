import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  NotFoundError,
  AuthorizationError,
  validateRequest
} from '@hacommon/common';
import { Ticket } from '../model/ticket';

const router = Router();


router.put('/api/tickets/:id',
  requireAuth,
  [
    body('title')
      .not().isEmpty().withMessage('title is required'),
    body('price')
      .isFloat({ gt: 0 }).withMessage('price must be greater than 0')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      throw new NotFoundError();
    }
    if (ticket.userId !== req.currentUser!.id) {
      throw new AuthorizationError('This ticket does not belong to the user');
    }
    const { title, price } = req.body;
    ticket.set({
      title,
      price
    });
    await ticket.save();
    res.send({ ticket });
  });


export { router as updateTicket };
