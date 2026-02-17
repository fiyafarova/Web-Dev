import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    products: Product[] = [
        {
            id: 1,
            name: 'Apple iPhone 15 128Gb Black',
            description: 'Смартфон с инновационным Dynamic Island, основной камерой 48 Мп и разъемом USB-C.',
            price: 385000,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
        },
        {
            id: 2,
            name: 'Apple AirPods Pro 2 with MagSafe',
            description: 'Наушники с активным шумоподавлением, адаптивным аудио и потрясающим качеством звука.',
            price: 115000,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
        },
        {
            id: 3,
            name: 'Sony PlayStation 5 Slim',
            description: 'Игровая консоль с дисководом, сверхскоростным SSD и поддержкой тактильной отдачи.',
            price: 303456,
            rating: 4.8,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474504.png?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
        },
        {
            id: 4,
            name: 'Dyson Airwrap Complete Long',
            description: 'Мультистайлер для разных типов волос. Сушит и укладывает без экстремального перегрева.',
            price: 176000,
            rating: 4.7,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hf9/84395425529886.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/hc9/h19/84395425595422.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/hda/h95/84395425660958.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h0f/hb7/84395425726494.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-volumise-s-chehlom-i-rascheskoi-stailer-rozovyi-serebrjanyi-114187319/?c=750000000'
        },
        {
            id: 5,
            name: 'Samsung Galaxy S24 Ultra 256Gb',
            description: 'Ультимативный флагман с поддержкой ИИ, встроенным пером S Pen и камерой 200 Мп.',
            price: 690000,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h16/h23/84963123527710.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h85/hb3/84963123593246.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
        },
        {
            id: 6,
            name: 'Xiaomi Mi Band 8 Black',
            description: 'Фитнес-браслет с ярким AMOLED-экраном, поддержкой более 150 спортивных режимов.',
            price: 18000,
            rating: 4.6,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p90/84688212.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/p32/p05/49520027.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pf9/p04/49520029.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p21/p91/84688214.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-10-chernyi-141530632/?c=750000000'
          },
        {
            id: 7,
            name: 'LG OLED C3 55"',
            description: 'Телевизор с идеальным черным цветом, бесконечной контрастностью и процессором α9 Gen6.',
            price: 650000,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p59/107023507.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/p41/p9b/39346833.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p08/p9b/39346831.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p5d/p9b/39346834.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/lg-55nano80a6b-140-sm-chernyi-138848836/?c=750000000'
        },
        {
            id: 8,
            name: 'Apple MacBook Air 13 M2',
            description: 'Невероятно тонкий ноутбук в обновленном дизайне с мощным чипом M2 и бесшумной работой.',
            price: 490000,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
        },
        {
            id: 9,
            name: 'Marshall Major IV Black',
            description: 'Легендарные наушники с более чем 80 часами беспроводного воспроизведения и беспроводной зарядкой.',
            price: 65000,
            rating: 4.8,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pb3/pc4/17680140.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000'
        },
        {
            id: 10,
            name: 'Yandex Station Max with Zigbee',
            description: 'Самая мощная умная колонка с Алисой, 4K видео и встроенным хабом управления Zigbee.',
            price: 155000,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h71/82802099421214.jpg?format=gallery-medium',
            images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h2b/h71/82802099421214.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h04/h6c/82802099617822.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h26/hae/82802099814430.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/jandeks-stantsija-maks-zigbee-bezhevyi-112523026/?c=750000000'
        }
    ];

}

export class ProductList {
}
