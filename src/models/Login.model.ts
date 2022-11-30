import { Pool, RowDataPacket } from 'mysql2/promise';
import { ICredentials, IUser } from '../interfaces';

export default class Login {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public getUserByCredentials = async ({ username, password }: ICredentials): Promise<IUser> => {
    const [[user]] = await this.connection.execute<(
    IUser & RowDataPacket)[]>(
      `SELECT *
        FROM Trybesmith.Users
        WHERE username = ? AND password = ?`,
      [username, password],
      );

    return user;
  };
}
