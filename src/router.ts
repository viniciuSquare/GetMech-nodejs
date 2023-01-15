import { Request, Response, Router } from 'express'

import { ClientController } from './User/User.controller';
import { FeedbackController } from './Feedback/Feedback.controller';
import { ServiceOrderController } from './ServiceOrder/ServiceOrder.controller';

export const router: Router = Router();

router.get('/Client', new ClientController().get );
router.post('/Client', new ClientController().create );
router.put('/Client', new ClientController().update );

router.get('/ServiceOrder', new ServiceOrderController().get );
router.post('/ServiceOrder', new ServiceOrderController().create );
router.put('/ServiceOrder', new ServiceOrderController().update );

router.get('/Feedback', new FeedbackController().get );
router.post('/Feedback', new FeedbackController().create );
router.put('/Feedback', new FeedbackController().update );
