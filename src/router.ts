import { Router } from 'express'

import { UserController } from './User/User.controller';
import { FeedbackController } from './Feedback/Feedback.controller';
import { ServiceOrderController } from './ServiceOrder/ServiceOrder.controller';

export const router: Router = Router();

router.get('/User', new UserController().get );
router.post('/User', new UserController().create );
router.put('/User', new UserController().update );

router.get('/ServiceOrder', new ServiceOrderController().get );
router.post('/ServiceOrder', new ServiceOrderController().create );
router.put('/ServiceOrder', new ServiceOrderController().update );

router.get('/Feedback', new FeedbackController().get );
router.post('/Feedback', new FeedbackController().create );
router.put('/Feedback', new FeedbackController().update );
