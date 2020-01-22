import { Component, OnInit , ViewChild } from '@angular/core';
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
  
  @ViewChild('frm', {static: false }) proForm : any;
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.product = new Product();
  }

  addProduct() : void {
    console.log("OVED!!!!")
    //this.proForm.form.reset()
    this.proForm.resetForm()
    // this is not working add name attribute to the html element
    //alert(this.productDetails())
    this.productService.addProduct(this.product) 
        .subscribe( p => this.handleResult(p),
                    err => alert(`Error: ${JSON.stringify(err , null , 4)}`)
        )

  }

  handleResult(product : Product) : void {
      alert(this.productDetails()); 
  }

  private productDetails() : string {
    return `
       Product: ${this.product.name}
       Price..: ${this.product.price}
       Stock..: ${this.product.stock}
    `
  }

}