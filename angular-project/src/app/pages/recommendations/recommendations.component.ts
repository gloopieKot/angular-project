import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {MainHeaderSearchComponent} from "../../components/main-header-search/main-header-search.component";
import {AdsListComponent} from '../../components/ads-list/ads-list.component';
import {RouterModule} from '@angular/router';
import {BreadcrumbComponent} from "../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-recommendations',
  standalone: true,
    imports: [
        HeaderComponent,
        MainHeaderSearchComponent,
        AdsListComponent,
        RouterModule,
        BreadcrumbComponent
    ],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {

}
