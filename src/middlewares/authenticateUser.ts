import { RequestHandler } from 'express';
import JwtEvaluator from '../utils/JwtEvaluator';

const authenticateUser: RequestHandler = (req, _res, next) => {
  const token = req.header('Authorization');
  const user = new JwtEvaluator().validateToken(token);
  req.body.user = user;
  next();
};

export default authenticateUser;
