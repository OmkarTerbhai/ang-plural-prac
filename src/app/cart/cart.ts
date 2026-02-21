import { Component, inject } from '@angular/core';
import { IProduct } from '../catalog/products.model';
import { CartService } from '../cart-service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
 
  private cartService: CartService = inject(CartService);
   private cart = toSignal(this.cartService.getCart(), {initialValue: []});
    // ngOnInit() {
      
    //   this.cartService.getCart().subscribe({
        
    //     next: (cart) => {
    //       console.log(cart);
    //       this.cart = cart},
    //   });
    // }
  
    get cartItems() {
      console.log(this.cart);
      return this.cart();
    }
  
    get cartTotal() {
      return this.cart().reduce((prev, next) => {
        let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
        return prev + next.price * discount;
      }, 0);
    }
  
    getImageUrl(product: IProduct) {
      if (!product) return '';
      return '/assets/images/robot-parts/' + product.imageName;
    }
}
