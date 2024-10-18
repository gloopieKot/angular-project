import { Routes } from '@angular/router';
import {AdsListComponent} from './components/ads-list/ads-list.component';
import {AdsCardComponent} from './pages/ads-card/ads-card.component';


export const routes: Routes = [

  {path: 'ads', component: AdsListComponent},
  {path: 'ad-detailed', component: AdsCardComponent},
];
