import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {MainHeaderSearchComponent} from '../../components/main-header-search/main-header-search.component';
// import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { PhotoService } from '@service/photoservice';
// import { GalleriaModule } from 'primeng/galleria';
import { RouterLink } from '@angular/router';
import {RouterModule} from '@angular/router';
import {BreadcrumbComponent} from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-ads-card',
  standalone: true,
  imports: [
    HeaderComponent,
    MainHeaderSearchComponent,
    BreadcrumbModule,
    RouterLink,
    RouterModule,
    BreadcrumbComponent
  ],
  // providers: [PhotoService],
  templateUrl: './ads-card.component.html',
  styleUrl: './ads-card.component.scss'
})
export class AdsCardComponent {
  // images: any[] | undefined;
  //
  // responsiveOptions: any[] = [
  //   {
  //     breakpoint: '1024px',
  //     numVisible: 5
  //   },
  //   {
  //     breakpoint: '768px',
  //     numVisible: 3
  //   },
  //   {
  //     breakpoint: '560px',
  //     numVisible: 1
  //   }
  // ];
  //
  // constructor(private photoService: PhotoService) {}
  //
  // ngOnInit() {
  //   this.photoService.getImages().then((images) => {
  //     this.images = images;
  //   });
  // }
}
