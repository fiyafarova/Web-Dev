import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent }
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes)
    ]
};
