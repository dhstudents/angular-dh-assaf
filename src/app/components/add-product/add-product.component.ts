import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
// make Product constructor parameters optional with ?
  product : Product;
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.product = new Product();
  }

  addProduct() : void {
    console.log("OVED!!!!")
    // this is not working add name attribute to the html element
    alert(this.productDetails())
    this.productService.addProduct(this.product) 
        .subscribe( p => alert(this.productDetails()),
                    err => alert("Error: " + err)
        )
  }

  private productDetails() : string {
    return `
       Product: ${this.product.name}
       Price..: ${this.product.price}
       Stock..: ${this.product.stock}
    `
  }

}