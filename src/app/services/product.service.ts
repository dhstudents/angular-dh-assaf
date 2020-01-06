import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable } from 'rxjs'
@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() {}

  public getAllProducts(): Product[] {
    const productlist: Product[] = [];
    productlist.push(new Product(1, "Apple", 3.5, 100));
    productlist.push(new Product(2, "Banana", 2, 120));
    productlist.push(new Product(3, "Peach", 10, 50));
    productlist.push(new Product(4, "Watermelon", 6, 40));
    return productlist;
  }

  // callback
  public getAllProductsAsync(successCallback, failCallback): void {
    setTimeout(() => {
      try {
        const productlist: Product[] = [];
        productlist.push(new Product(1, "Apple", 3.5, 100));
        productlist.push(new Product(2, "Banana", 2, 120));
        productlist.push(new Product(3, "Peach", 10, 50));
        productlist.push(new Product(4, "Watermelon", 6, 40));
        //    return productlist;
        successCallback(productlist);
      } catch (error) {
        failCallback(error);
      }
    }, 5000);
  }
  // promise
  public getAllProductsAsyncPromise(): Promise<Product[]> {
    // resolve = successCallback,
    // reject  = failCallback
    return new Promise((resolve /* successCallback*/, reject /* failCallback */) => {
      setTimeout(() => {
        try {
          const productlist: Product[] = [];
          productlist.push(new Product(1, "Apple", 3.5, 100));
          productlist.push(new Product(2, "Banana", 2, 120));
          productlist.push(new Product(3, "Peach", 10, 50));
          productlist.push(new Product(4, "Watermelon", 6, 40));
          //    return productlist;
          resolve(productlist);
        } catch (error) {
          reject(error)
        }
      }, 5000);
    });
  }

  // observable (import { Observable } from 'rxjs' )
  public getAllProductsAsyncObservable(): Observable<Product[]> {

    return Observable.create( observer => {
      setTimeout(() => {
        try {
          const productlist: Product[] = [];
          productlist.push(new Product(1, "Apple", 3.5, 100));
          productlist.push(new Product(2, "Banana", 2, 120));
          productlist.push(new Product(3, "Peach", 10, 50));
          productlist.push(new Product(4, "Watermelon", 6, 40));
          //    return productlist;
          observer.next(productlist);
        } catch (error) {
          observer.error(error)
        }
      }, 5000);

    })




  }


}

// https://angular.io/guide/observables
// https://angular.io/guide/observables-in-angular
// https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
// https://appdividend.com/2018/12/08/angular-7-observables-tutorial-with-example/
