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
        name: 'MENU_ITEMS.BOOKS',
        fontIcon: 'import_contacts',
        redirectUrl: '/books',
      },
    ];
  }

  redirectTo(menuLink: MenuLink) {
    this.router.navigate([menuLink.redirectUrl]);
  }

}
