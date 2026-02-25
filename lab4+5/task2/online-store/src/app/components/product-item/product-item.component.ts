import { Component,  input, output, signal , EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
    })
    export class ProductItemComponent implements OnInit {
        product = input.required<any>();
        remove = output<number>()

    currentImage!: string;

    ngOnInit() {
      this.currentImage = this.product().image;
    }

    changeImage(img: string) {
      this.currentImage = img;
    }

    like() { this.product().likes++; }
    delete() { this.remove.emit(this.product().id); }

    share(platform: string) {
        const text = encodeURIComponent(`Посмотри: ${this.product.name}`);
        const url = encodeURIComponent(this.product().link);
        const link = platform === 'wa'
          ? `https://wa.me/?text=${text}%20${url}`
          : `https://t.me/share/url?url=${url}&text=${text}`;
        window.open(link, '_blank');
    }
}
