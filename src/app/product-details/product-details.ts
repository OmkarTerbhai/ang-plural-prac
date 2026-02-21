import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})
export class ProductDetails {
  @Input() product!: IProduct;
  @Output() eventI: EventEmitter<IProduct> = new EventEmitter();

  getImageName(product: IProduct): string {
    return "/assets/images/robot-parts/" + product.imageName;
  }

  buyMe() {
    this.eventI.emit();
  }
}
