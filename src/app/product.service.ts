import {Injectable} from '@angular/core';
import {Product} from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
  }

  save(product: Product) {
    this.products.push(product);
  }

  list() {
    return this.products;
  }
}
