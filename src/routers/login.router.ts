import express from 'express';
import { LoginController } from '../controllers';

const router = express.Router();
const controller = new LoginController();

router.post('/', controller.authenticate);

export default router;
