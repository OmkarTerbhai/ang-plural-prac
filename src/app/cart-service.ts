import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from './catalog/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http: HttpClient = inject(HttpClient);

  addToCart(product: IProduct) {
    this.http.post('http://localhost:3000/cart',product).subscribe(() => {
      console.log(`Product ${product.name} added to Cart successfully`);
    });
  }

  getCart() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/cart');
  }
}
