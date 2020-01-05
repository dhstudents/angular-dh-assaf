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
    }, 3000);
  }
}
