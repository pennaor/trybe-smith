import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class Order {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrder[]> => {
    const [result] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
        FROM Trybesmith.Orders as O
        INNER JOIN Trybesmith.Products as P
        ON O.id = P.orderId
        GROUP BY O.id, O.userId`);

    return result;
  };
  
  public create = async (userId: number): Promise<number> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Orders
        (userId)
        VALUES
        (?)`,
      [userId],
    );
    return insertId;
  };
}
