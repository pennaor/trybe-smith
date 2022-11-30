import express from 'express';
import productRouter from './product.router';
import userRouter from './user.router';
import orderRouter from './order.router';
import loginRouter from './login.router';

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/products', productRouter);
routers.use('/orders', orderRouter);
routers.use('/users', userRouter);

export default routers;
