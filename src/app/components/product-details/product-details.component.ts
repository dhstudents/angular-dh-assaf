import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product;

  constructor(
    private activatedRoute : ActivatedRoute , 
    private productService : ProductService 
  ) { }

  ngOnInit() {
  //  alert("Product details!!!");
    let proid = this.activatedRoute.snapshot.params.id
  //  alert(proid);
  
  }

}