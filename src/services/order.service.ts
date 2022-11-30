import { IOrder } from '../interfaces';
import { OrderModel, ProductModel } from '../models';
import connection from '../models/connection';
import validations from './validations';

type CreateOrderBody = {
  user: {
    id: number;
    username: string;
  };
  productsIds: number[];
};

export default class OrderService {
  private orderModel: OrderModel;
  
  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => {
    const orders: IOrder[] = await this.orderModel.getAll();
    return orders;
  };

  public create = async ({ user, productsIds }: CreateOrderBody): Promise<object> => {
    validations.order.onCreate(productsIds);

    const orderid: number = await this.orderModel.create(user.id);

    await new ProductModel(connection).updateOrderId(orderid, productsIds);

    return { userId: user.id, productsIds };
  };
}
