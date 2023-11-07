import { TranslateModule } from '@ngx-translate/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuLink, MenuService } from './menu.service';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIconModule]
})
export class MenuComponent {
  @ViewChild('indicator') indicator!: ElementRef;
  menuItems: MenuLink[] = [];

  constructor(
    router: Router,
    private menuService: MenuService
  ) {
    this.menuItems = menuService.getMenuLinks();
    console.log(this.menuItems)
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        this._setActiveItem(e.urlAfterRedirects);
      }
    });
  }

  onItemClick(item: MenuLink) {
    this.menuService.redirectTo(item);
  }

  private _setActiveItem(url: string) {
    const activeClass = "active";
    this.menuItems.forEach(item => {
      item.cssClass = item.cssClass ? item.cssClass : '';
      // remove active class
      if(item.cssClass.includes(activeClass)) {
        item.cssClass = item.cssClass.replace(activeClass,'');
      }
      // add active class
      if(url.startsWith(item.redirectUrl)) {
        item.cssClass = item.cssClass +' '+ activeClass;
      }
    });
    //move indicator
    var newIndicatorTopOffset = '-50%';
    const activeIndex = this.menuItems.findIndex(item => item.cssClass?.includes(activeClass));
    if(activeIndex != -1) {
      const activeElement = document.getElementById('listElement_'+activeIndex);
      if(activeElement) {
        const elementHeight = activeElement.clientHeight;
        const topOffset = activeElement.offsetTop;
        const indicatorHalfHeight = 40;
        newIndicatorTopOffset = topOffset + (elementHeight / 2) - indicatorHalfHeight + 'px';
      }
    }
    console.log('newIndicatorTopOffset',newIndicatorTopOffset);
    this.indicator.nativeElement.style.top = newIndicatorTopOffset;
  }

}
