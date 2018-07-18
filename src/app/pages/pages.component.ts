import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { NbAuthJWTToken, NbAuthService } from '../@theme/components/auth';
import { NbAclService } from '../@theme/components/security';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="getMenu()"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {

  constructor(private authService: NbAuthService, private aclService: NbAclService) { }

  ngOnInit() { }

  getRoleName() {
    let roleName: String[];
    this.authService.onTokenChange()
        .subscribe((token: NbAuthJWTToken) => {
          roleName = token.getPayload()['role'];
        });
    return roleName
  }

  isAdmin() {
    let role = this.getRoleName();
    return (role['roleName'] == 'Admin') ? true : false;
  }

  menuVisibility(menu, title, visible) {
    let newmenu = menu;
    let index = menu.findIndex(v => v.title == title);
    let menu_filter = menu.filter(v => v.title == title);
    if ((menu_filter.length > 0) && (index >= 0)) {
      menu_filter[0].hidden = !visible;
      newmenu = [
        ...menu.slice(0, index),
        menu_filter[0],
        ...menu.slice(index + 1),
      ]
    }
    return newmenu;
  }

  getMenu() {
    return this.menuVisibility(MENU_ITEMS, 'Settings', this.isAdmin());
  }

  // menu = MENU_ITEMS;

}
