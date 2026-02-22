import { Component, inject } from '@angular/core';
import { IProduct } from './products.model';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetails } from '../product-details/product-details';
import { ProductService } from '../product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartService } from '../cart-service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductDetails, RouterLink, RouterLinkActive],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css'],
})
export class Catalog  implements OnInit {
  
  private prodSvc = inject(ProductService);
  private cartSvc: CartService = inject(CartService);
  private route = inject(ActivatedRoute);

  products = toSignal(this.prodSvc.getProducts(),  { initialValue: [] });
  filter: string = 'null';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
        this.filter = params['category'] ?? 'null';
    });
  }

  printKey(event: KeyboardEvent): void {
    console.log(`User pressed ${event.key}`);
  }

  getImageName(product: IProduct): string {
    return "/assets/images/robot-parts/" + product.imageName;
  }

  filterProds(str: string) : void {
    this.filter = str;

  }

  addToCart(product: IProduct) {
    console.log(`Product ${product.name} added to cart`);
    this.cartSvc.addToCart(product);
  }

  getProducts() : IProduct[] {
   if(this.filter == 'null')
      return this.products();
    else
      return this.products().filter((p: IProduct) => p.category == this.filter);
  }
}
