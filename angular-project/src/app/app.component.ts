import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdsListComponent} from './components/ads-list/ads-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
}
