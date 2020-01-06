import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[]
  constructor(private productService : ProductService) { }

  ngOnInit() {
   // sync call
  // this.products = this.productService.getAllProducts();
   // async call
   console.log("start");
   this.productService.getAllProductsAsync((data) =>{ 
     //console.log(data)
     this.products = data;
      } , (err) =>{console.log(err)});
   console.log("end");
  }

  

}