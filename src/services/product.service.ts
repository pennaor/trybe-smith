import { IProduct } from '../interfaces';
import { ProductModel } from '../models';
import connection from '../models/connection';
import validations from './validations';

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public getAll = async (): Promise<IProduct[]> => {
    const products: IProduct[] = await this.productModel.getAll();
    return products;
  };

  public create = async (productBody: IProduct): Promise<IProduct> => {
    validations.product.onCreate(productBody);

    const product: IProduct = await this.productModel.create(productBody);
    return product;
  };
}
