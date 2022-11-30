import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class Product {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProduct[]> => {
    const [result] = await this.connection.execute<(IProduct & RowDataPacket)[]>(
      `SELECT * 
        FROM Trybesmith.Products`);

    return result;
  };
  
  public create = async ({ name, amount }: IProduct): Promise<IProduct> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Products (name, amount)
        VALUES (?, ?)`,
      [name, amount],
    );

    return { id: insertId, name, amount };
  };

  public updateOrderId = async (orderId: number, productIds: number[]): Promise<number> => {
    const paramIds = productIds.map((id) => `id = ${id}`).join(' OR ');
    const [{ affectedRows }] = await this.connection.execute<ResultSetHeader>(
      `UPDATE Trybesmith.Products
        SET orderId = ?
        WHERE ${paramIds}`,
      [orderId],
    );
    return affectedRows;
  };
}
