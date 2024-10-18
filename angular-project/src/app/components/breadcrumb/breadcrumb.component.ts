import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule, RouterModule, RouterLink, NgClass],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})

export class BreadcrumbComponent implements OnInit {
  // items: MenuItem[] | undefined;
  //
  // home: MenuItem | undefined;
  //
  // ngOnInit() {
  //   this.home = { icon: 'pi pi-home', routerLink: '/' };
  //   this.items = [
  //     { icon: 'pi pi-home', route: '/' },
  //     { label: 'Город' },
  //     { label: 'Категория' },
  //     { label: 'Объявление', route: '/ad-detailed' }];
  // }
  // Другой вариант
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Город', routerLink: '#' },
      { label: 'Категория', routerLink: '#'},
      { label: 'Подкатегория', routerLink: '#' },
      { label: 'Объявление', routerLink: '/ad-detailed' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}


