import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class User {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IUser[]> => {
    const [result] = await this.connection.execute<(IUser & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Users');

    return result;
  };

  public create = async (userBody: IUser): Promise<{ userId: number }> => {
    const { username, classe, level, password } = userBody;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users
        (username, classe, level, password)
        VALUES
        (?, ?, ?, ?)`,
      [username, classe, level, password],
    );

    return { userId: insertId };
  }; 
}
