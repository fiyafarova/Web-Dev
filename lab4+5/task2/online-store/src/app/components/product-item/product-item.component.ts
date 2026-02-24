import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  // Переменная для активного изображения
  currentImage!: string;

  ngOnInit() {
    // По умолчанию ставим главное изображение
    this.currentImage = this.product.image;
  }

  // Метод для смены картинки при клике на миниатюру
  changeImage(img: string) {
    this.currentImage = img;
  }

  like() { this.product.likes++; }
  delete() { this.remove.emit(this.product.id); }

  share(platform: string) {
    const text = encodeURIComponent(`Посмотри: ${this.product.name}`);
    const url = encodeURIComponent(this.product.link);
    const link = platform === 'wa'
      ? `https://wa.me/?text=${text}%20${url}`
      : `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(link, '_blank');
  }
}
