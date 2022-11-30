import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Unauthorized } from '../errors';
import { JwtUserPayload } from '../interfaces';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret_is_secret';

export default class JwtEvaluator {
  public createToken = (data: object) => Jwt.sign(data, secret, {
    algorithm: 'HS256', expiresIn: '1d',
  });

  public validateToken = (token = ''): JwtUserPayload => {
    const result = <unknown> Jwt.verify(token, secret, {}, (error, decoded) => {
      if (!error) {
        return decoded;
      }
      if (error.message === 'jwt must be provided') {
        throw new Unauthorized('Token not found');
      }
      throw new Unauthorized('Invalid token');
    }) as JwtUserPayload;

    return result;
  };
}
