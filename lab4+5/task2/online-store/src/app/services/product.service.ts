import { Injectable } from '@angular/core';
import { Category, Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
    getCategories(): Category[] {
        return [
            { id: 1, name: 'Телефоны и гаджеты' },
            { id: 2, name: 'Бытовая техника' },
            { id: 3, name: 'Компьютеры' },
            { id: 4, name: 'Мебель' }
        ];
    }

    getProducts(): Product[] {
        return [
            {
                id: 1, categoryId: 1, name: 'Apple iPhone 15 Pro Max 256GB синий',
                description: 'Флагманский смартфон с титановым корпусом и мощным процессором A17 Pro.',
                price: 585000, rating: 5.0, likes: 125,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/he9/86319872344094.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/pb7/p02/29468759.png?format=gallery-medium',
                  'https://cdn.new-brz.net/app/public/models/MU7A3HX-A/large/w/230913100038674220.webp'
                ],
                link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/'
              },
              {
                id: 2, categoryId: 1, name: 'Samsung Galaxy S24 Ultra 12/256GB серый',
                description: 'Смартфон с искусственным интеллектом Galaxy AI и встроенным стилусом S Pen.',
                price: 520000, rating: 4.9, likes: 88,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
                  'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_samsung_sm_s928bzvgskz_thx_68_200_5_galaxy_s24_ultra_5g_256gb_titanium_violet_277513_el.jpg'
                ],
                link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-256-gb-seryi-116043556/'
              },
              {
                id: 3, categoryId: 1, name: 'Xiaomi Redmi Note 13 Pro 8/256GB черный',
                description: 'Камера 200 Мп и яркий AMOLED экран 120 Гц.',
                price: 135000, rating: 4.8, likes: 210,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium',
                  'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_redmi_note_13_pro_256gb8gb_thx_md_667_200_4_midnight_black_277296_1.jpg'
                ],
                link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-8-256-gb-chernyi-116040330/'
              },
              {
                id: 4, categoryId: 1, name: 'Apple AirPods Pro 2 with Type-C',
                description: 'Наушники с лучшим активным шумоподавлением и адаптивным звуком.',
                price: 112000, rating: 5.0, likes: 450,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium',
                  'https://api.fmobile.kz/image/media/sale/image/MTJV3_AV4%202023-10-20_13-13-01.601910%2056f5eeb843a9d12244c27712.jpeg'
                ],
                link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-magsafe-case-type-c-belyi-113558963/'
              },
              {
                id: 5, categoryId: 1, name: 'Apple Watch Series 9 GPS 45mm черный',
                description: 'Новый процессор S9 и жест Double Tap для управления без касаний.',
                price: 195000, rating: 4.9, likes: 67,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/hd9/h0b/83874224865310.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h45/h35/83874222440478.png?format=gallery-large'
                ],
                link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45-mm-chernyi-113144567/'
              },

              {
                id: 6, categoryId: 2, name: 'Пылесос Dyson V15 Detect Absolute',
                description: 'Беспроводной пылесос с лазерной подсветкой пыли.',
                price: 360000, rating: 5.0, likes: 34,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/h96/h72/85625410420766.jpg?format=gallery-large',
                  'https://images.satu.kz/216636973_w200_h200_pylesos-dyson-v12.jpg'
                ],
                link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-101704515/'
              },
              {
                id: 7, categoryId: 2, name: 'Стиральная машина LG F2J3NS0W белый',
                description: 'Инверторный мотор и функция пара SpaSteam.',
                price: 185000, rating: 4.8, likes: 112,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIPDRl3HqIbE_KR7fzJeX4qaMj96S1ugW_Q&s',
                images: [
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jF0zXjtl6H24ppal8xWeAB4aiIMUN8XJQw&s',
                  'https://resources.cdn-kaspi.kz/img/m/p/pda/p5b/59225017.png?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/'
              },
              {
                id: 8, categoryId: 2, name: 'Холодильник Samsung RB33A3062SA серый',
                description: 'Система No Frost и технология All-around Cooling.',
                price: 295000, rating: 4.7, likes: 45,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3Vsjp19w6Z-qzvZoJIE-PKBxVgBOLAw24w&s',
                images: [
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcEsd0LqDbBHAo5Omf2cukbyqs6frN1rLoQ&s'
                ],
                link: 'https://kaspi.kz/shop/p/samsung-rb33a3062sa-serebristyi-101435266/'
              },
              {
                id: 9, categoryId: 2, name: 'Микроволновая печь Solo Samsung MS23F302TAS',
                description: 'Биокерамическое покрытие и стильный дизайн.',
                price: 52000, rating: 4.9, likes: 190,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/p83/pad/72355763.png?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/p83/pad/72355763.png?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/samsung-ms23f302tas-serebristyi-2000041/'
              },
              {
                id: 10, categoryId: 2, name: 'Электрочайник Xiaomi Mi Smart Kettle Pro',
                description: 'Управление со смартфона и поддержание температуры.',
                price: 22000, rating: 4.8, likes: 320,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/p25/73136693.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/p64/p25/73136694.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/xiaomi-mi-smart-kettle-pro-chernyi-100645936/'
              },

              {
                id: 11, categoryId: 3, name: 'Apple MacBook Air 13 M2 8/256GB серый',
                description: 'Невероятно тонкий дизайн и мощный чип M2.',
                price: 545000, rating: 5.0, likes: 95,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-105152504/'
              },
              {
                id: 12, categoryId: 3, name: 'Игровой ноутбук ASUS TUF Gaming F15',
                description: 'RTX 3050 и процессор Intel Core i5.',
                price: 395000, rating: 4.8, likes: 64,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/pf6/p03/72613217.png?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/p7c/p07/72613228.png?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx506hc-hn011-90nr0724-m02170-chernyi-105156645/'
              },
              {
                id: 13, categoryId: 3, name: 'Монитор LG 24MP400-B черный',
                description: 'IPS матрица и технология AMD FreeSync.',
                price: 58000, rating: 4.7, likes: 88,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h03/63973241487390.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/hf3/h84/63973251055646.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/lg-24mp400-b-chernyi-102553757/'
              },
              {
                id: 14, categoryId: 3, name: 'Мышь Logitech G102 Lightsync',
                description: 'Классическая игровая мышь с RGB подсветкой.',
                price: 12000, rating: 4.9, likes: 1200,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100278147/'
              },
              {
                id: 15, categoryId: 3, name: 'Клавиатура Razer Cynosa V2',
                description: 'Мембранная клавиатура с индивидуальной подсветкой клавиш.',
                price: 28000, rating: 4.7, likes: 42,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/h90/64097444102174.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/h0b/h90/64097444102174.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/razer-cynosa-v2-chernyi-100589332/'
              },

              {
                id: 16, categoryId: 4, name: 'Кресло игровое Cougar Armor One черный',
                description: 'Эргономичное кресло с регулировкой 4D.',
                price: 89000, rating: 4.9, likes: 31,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/pa7/p9a/44637907.png?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/pe0/p9a/44637909.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/cougar-armor-one-chernyi-100018501/'
              },
              {
                id: 17, categoryId: 4, name: 'Стол компьютерный имидж 120 белый',
                description: 'Минималистичный дизайн и прочный каркас.',
                price: 25000, rating: 4.5, likes: 56,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pd4/61953188.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/p5f/pd8/61953199.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/stol-komp-juternyi-imidzh-120-belyi-104273391/'
              },
              {
                id: 18, categoryId: 4, name: 'Диван кровать Кедр белый/серый',
                description: 'Компактный диван с механизмом трансформации.',
                price: 75000, rating: 4.4, likes: 23,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h45/86777038340126.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/p52/p92/88087136.png?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/divan-kedr-belyi-seryi-105151241/'
              },
              {
                id: 19, categoryId: 4, name: 'Шкаф распашной Рино белый',
                description: 'Вместительный двухдверный шкаф.',
                price: 45000, rating: 4.6, likes: 19,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p7d/53466247.jpg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7d/53466248.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/shkaf-rino-belyi-105151511/'
              },
              {
                id: 20, categoryId: 4, name: 'Стеллаж Каллакс 4 ячейки белый',
                description: 'Универсальное решение для хранения книг и декора.',
                price: 18000, rating: 4.8, likes: 140,
                image: 'https://resources.cdn-kaspi.kz/img/m/p/p0e/p1a/61752210.jpeg?format=gallery-medium',
                images: [
                  'https://resources.cdn-kaspi.kz/img/m/p/p14/p85/61752211.jpg?format=gallery-medium'
                ],
                link: 'https://kaspi.kz/shop/p/stellazh-kallaks-4-jacheiki-belyi-105151512/'
            }
        ];
    }
}
