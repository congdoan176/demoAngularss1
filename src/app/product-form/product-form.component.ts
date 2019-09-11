import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {max} from 'rxjs/operators';
import {ProductService} from '../product.service';
import {Product} from '../Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  formControls = {
    name: [null],
    description: [null],
    price: [null]
  };
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(this.formControls);
  }

  saveProduct() {
    // tslint:disable-next-line:max-line-length
    this.productService.save(new Product(this.formGroup.get('name').value, this.formGroup.get('price').value, this.formGroup.get('description').value));
    window.alert('thanh cong.');
  }
}
