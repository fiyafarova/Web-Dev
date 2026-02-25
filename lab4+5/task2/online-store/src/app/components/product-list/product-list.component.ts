import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../../services/product.service';
import { Product, Category } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, FormsModule, ProductItemComponent],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    categories: Category[] = [];
    allProducts: Product[] = [];
    filteredProducts: Product[] = [];

    selectedCategoryId: number | null = null;
    searchTerm: string = '';

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.categories = this.productService.getCategories();
        this.allProducts = this.productService.getProducts();
        this.applyFilters();
    }

    selectCategory(id: number) {
        this.selectedCategoryId = (this.selectedCategoryId === id) ? null : id;
        this.applyFilters();
    }

    applyFilters() {
        this.filteredProducts = this.allProducts.filter(p => {
            const matchesCat = this.selectedCategoryId ? p.categoryId === this.selectedCategoryId : true;
            const matchesSearch = p.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            return matchesCat && matchesSearch;
        });
    }

    handleRemove(id: number) {
        this.allProducts = this.allProducts.filter(p => p.id !== id);
        this.applyFilters();
    }
}
