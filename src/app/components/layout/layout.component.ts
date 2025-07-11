import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';

import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Menubar } from 'primeng/menubar';

import { Router } from '@angular/router';

import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ButtonModule,
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    BreadcrumbModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  items: MenuItem[] | undefined;

  /* home: MenuItem | undefined; */

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Materiales',
        icon: 'pi pi-cog',
        routerLink: '/materials',
      },
      {
        label: 'Targoides',
        icon: 'pi pi-search',
        routerLink: '/targoids',
      },
      {
        label: 'Portanaves',
        icon: 'pi pi-search',
        routerLink: '/fleetcarriers'
      },
      {
        label: 'Minería',
        icon: 'pi pi-search',
        routerLink: '/mining',
        items: [
          {
            label: 'Superficie',
            icon: 'pi pi-search',
            routerLink: '/mining/surface'
          },
          {
            label: 'Nucleo profundo',
            icon: 'pi pi-search',
            routerLink: '/mining/core'
          }
        ]
      },
      {
        label: 'Transporte',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Carga',
            icon: 'pi pi-search',
            routerLink: 'transport/cargo'
          },
          {
            label: 'Pasajeros',
            icon: 'pi pi-search',
            routerLink: 'transport/passengers'
          }
        ]
      },
      /* {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Targoides',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      }, */
    ];
    /* this.home = { icon: 'pi pi-home', routerLink: '/' }; */
  }
}
