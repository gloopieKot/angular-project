import { Routes } from '@angular/router';
import {AdsCardComponent} from './pages/ads-card/ads-card.component';
import {RecommendationsComponent} from './pages/recommendations/recommendations.component';


export const routes: Routes = [
  {path: '', redirectTo: '/recommendations', pathMatch: 'full'},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'ad-detailed', component: AdsCardComponent},
];
