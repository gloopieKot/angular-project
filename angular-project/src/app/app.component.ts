import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdsListComponent} from './components/ads-list/ads-list.component';
import {HeaderComponent} from './components/header/header.component';
import {MainHeaderSearchComponent} from './components/main-header-search/main-header-search.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AdsListComponent, HeaderComponent, MainHeaderSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
}
