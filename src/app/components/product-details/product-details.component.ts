import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product;

  constructor() { }

  ngOnInit() {
    alert("Product details!!!");
  }

}