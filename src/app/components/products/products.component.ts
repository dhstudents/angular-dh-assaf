import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.products = productService
  }

  

}