import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './catalog/products.model';
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  constructor(private http: HttpClient) {
    
  }

  getProducts(): Observable<IProduct[]> {
    // call through dev-server proxy; '/api' prefix will be stripped and forwarded
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
}
