import { RequestHandler } from 'express';
import { ProductService } from '../services';
import { IProduct } from '../interfaces';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAll: RequestHandler = async (_req, res): Promise<void> => {
    const products: IProduct[] = await this.service.getAll();
    res.status(200).json(products);
  };

  public create: RequestHandler = async (req, res): Promise<void> => {
    const product: IProduct = await this.service.create(req.body);
    res.status(201).json(product);
  };
}
