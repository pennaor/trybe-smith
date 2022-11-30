import { RequestHandler } from 'express';
import { LoginService } from '../services';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public authenticate: RequestHandler = async (req, res): Promise<void> => {
    const token: string = await this.service.authenticate(req.body);
    res.status(200).json({ token });
  };
}
