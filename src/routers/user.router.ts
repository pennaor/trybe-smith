import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();
const controller = new UserController();

router.get('/', controller.getAll);
router.post('/', controller.create);

export default router;
