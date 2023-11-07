import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

export interface MenuLink {
  name: string,
  fontIcon: string,
  redirectUrl: string,
  cssClass?: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private router: Router
  ) { }

  getMenuLinks(): MenuLink[] {
    return [
      {
        name: 'MENU_ITEMS.HOME',
        fontIcon: 'home',
        redirectUrl: '/home',
      },
      {
        name: 'MENU_ITEMS.HOME',
        fontIcon: 'home2',
        redirectUrl: '/22',
      },
      {
        name: 'MENU_ITEMS.HOME',
        fontIcon: 'home3',
        redirectUrl: '/33',
      }
    ];
  }

  redirectTo(menuLink: MenuLink) {
    this.router.navigate([menuLink.redirectUrl]);
  }

}
