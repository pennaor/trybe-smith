import express from 'express';
import 'express-async-errors';
import errorManager from './middlewares/errorManager';
import routers from './routers';

const app = express();

app.use(express.json());
app.use(routers);
app.use(errorManager);

export default app;
