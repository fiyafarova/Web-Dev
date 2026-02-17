import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // Обязательно добавь сюда!
  template: '<app-product-list></app-product-list>',
})
export class AppComponent {}
