import express from 'express';
import { ProductController } from '../controllers';

const router = express.Router();
const controller = new ProductController();

router.get('/', controller.getAll);
router.post('/', controller.create);

export default router;
