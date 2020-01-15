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
    // this.products.push( new Product(1 , "p 1" , 2.3 , 20)),
    // this.products.push( new Product(1 , "p 2" , 2.3 , 20)),
    // this.products.push( new Product(1 , "p 3" , 2.3 , 20)),
    // this.products.push( new Product(1 , "p 4" , 2.3 , 20)),
    // this.products.push( new Product(1 , "p 5" , 2.3 , 20)),
    // this.products.push( new Product(1 , "p 6" , 2.3 , 20))


  //----------
  // sync call
  //----------
  // this.products = this.productService.getAllProducts();

  //-------------------------
  // async call with callback
  //-------------------------
  //  console.log("start");
  //  this.productService.getAllProductsAsync((data) =>{ 
  //    //console.log(data)
  //    this.products = data;
  //     } , (err) =>{console.log(err)});
  //  console.log("end");
  


  //-------------------------
  // async call with promise
  //-------------------------
  // this.productService.getAllProductsAsyncPromise()
  //             .then(  (products) =>{  this.products = products;  })
  //             .catch( error => console.log(error))

  //---------------------------
  // async call with observable (next , error , complete)
  //---------------------------
//   this.productService.getAllProductsAsyncObservable().subscribe(
//     products =>{  this.products = products;  },
//     error => console.log(error),
//     () => { console.log("done")} // complete
//  )
// 
  this.productService.getAllProductsHttp().subscribe( 
    products => this.products = products,    // next
    error => console.log(error),
    () => console.log("done")
  )


  }
}
//--------------
//             .then(  (products) =>{  this.products = products;  })
//             .catch( error => console.log(error))
//--------------
