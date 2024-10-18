import { Component } from '@angular/core';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-ads-list',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
    NgOptimizedImage,
    RouterLink
  ],
  providers: [ProductService],
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})


export class AdsListComponent {
  // layout: string = 'list';
  layout: "grid" = 'grid';

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data: Product[]) => {
      // this.products = data.slice(0, 12);
      this.products = data;
    });
  }

  getSeverity(product: Product) {
    console.log(product);
  }

}

