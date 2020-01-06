import { Injectable } from "@angular/core";
import { Product } from "../models/product";
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
}
