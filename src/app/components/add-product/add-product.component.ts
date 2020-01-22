import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
// make Product constructor parameters optional with ?
  product : Product;
  constructor() { }

  ngOnInit() {
    this.product = new Product();
  }

  addProduct() : void {
    console.log("OVED!!!!")
    // this is not working add name attribute to the html element
    alert(`
      Product: ${this.product.name}
      Price..: ${this.product.price}
      Stock..: ${this.product.stock}
    `)
  }

}