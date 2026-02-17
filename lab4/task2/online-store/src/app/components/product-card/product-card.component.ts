import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  currentImageIndex: number = 0;

  changeImage(index: number) {
    this.currentImageIndex = index;
  }

  shareToWhatsApp() {
    const text = `Посмотри, что я нашел: ${this.product.name} - ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareToTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Классный товар: ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
