import { Unauthorized } from '../errors';
import { ICredentials } from '../interfaces';
import { LoginModel } from '../models';
import connection from '../models/connection';
import Jwt from '../utils/JwtEvaluator';
import validations from './validations';

export default class LoginService {
  private loginModel: LoginModel;

  private jwt: Jwt;

  constructor() {
    this.loginModel = new LoginModel(connection);
    this.jwt = new Jwt();
  }

  public authenticate = async (credentials: ICredentials): Promise<string> => {
    validations.user.onAuthenticate(credentials);

    const user = await this.loginModel.getUserByCredentials(credentials);
    if (!user) {
      throw new Unauthorized('Username or password invalid');
    }

    return this.jwt.createToken({ id: user.id, username: user.username });
  };
}
