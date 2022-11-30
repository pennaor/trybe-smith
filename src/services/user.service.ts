import { IUser } from '../interfaces';
import { UserModel } from '../models';
import connection from '../models/connection';
import Jwt from '../utils/JwtEvaluator';
import validations from './validations';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public getAll = async (): Promise<IUser[]> => {
    const users: IUser[] = await this.userModel.getAll();
    return users;
  };

  public create = async (newUser: IUser): Promise<string> => {
    validations.user.onCreate(newUser);

    const result = await this.userModel.create(newUser);
    return new Jwt().createToken(result);
  };
}
