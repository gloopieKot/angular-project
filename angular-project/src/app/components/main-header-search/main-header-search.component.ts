import { Component, OnInit  } from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header-search',
  standalone: true,
  imports: [
    MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, ButtonDirective
  ],
  // providers: [MessageService],
  templateUrl: './main-header-search.component.html',
  styleUrl: './main-header-search.component.scss'
})
export class MainHeaderSearchComponent implements OnInit {
  items: MenuItem[] | undefined;

  // constructor(private router: Router) {
  // }

  ngOnInit() {
    this.items = [
      {
        label: 'Все категории',
        icon: 'pi pi-bars',
        items: [
          {
            label: 'категория1',
            route: '/installation'
          },
          {
            label: 'категория2',
            url: 'https://angular.io/',
            items: [
              {
                label: 'подкатегория',
                route: '/installation'
              }
            ]
          },
          {
            label: 'Категория2',
            route: '/configuration'
            // url: 'https://angular.io/'
          }
        ]
      }
    ]
  }
}


