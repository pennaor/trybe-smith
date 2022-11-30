import { RequestHandler } from 'express';
import { UserService } from '../services';
import { IUser } from '../interfaces';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public getAll: RequestHandler = async (_req, res): Promise<void> => {
    const users: IUser[] = await this.service.getAll();
    res.status(200).json(users);
  };

  public create: RequestHandler = async (req, res): Promise<void> => {
    const token: string = await this.service.create(req.body);
    res.status(201).json({ token });
  };
}
