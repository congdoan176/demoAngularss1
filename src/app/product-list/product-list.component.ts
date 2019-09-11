import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.list();
  }

}
