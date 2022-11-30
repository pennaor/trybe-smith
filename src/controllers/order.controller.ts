import { RequestHandler } from 'express';
import { OrderService } from '../services';
import { IOrder } from '../interfaces';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll: RequestHandler = async (_req, res): Promise<void> => {
    const orders: IOrder[] = await this.service.getAll();
    res.status(200).json(orders);
  };

  public create: RequestHandler = async (req, res): Promise<void> => {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  };
}
