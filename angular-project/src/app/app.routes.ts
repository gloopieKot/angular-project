import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(c => c.AppComponent),
  },
  {
    path: 'pages/ads/ads-card',
    loadComponent: () => import('./pages/ads-card/ads-card.component').then(c => c.AdsCardComponent),
  }
];
