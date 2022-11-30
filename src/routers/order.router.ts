import express from 'express';
import { OrderController } from '../controllers';
import authenticateUser from '../middlewares/authenticateUser';

const router = express.Router();
const controller = new OrderController();

router.get('/', controller.getAll);
router.use(authenticateUser);
router.post('/', controller.create);

export default router;
