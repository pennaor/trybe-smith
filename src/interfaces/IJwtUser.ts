import { JwtPayload } from 'jsonwebtoken';

export interface JwtUserPayload extends JwtPayload {
  user: {
    id: number;
    username: string;
  };
}
