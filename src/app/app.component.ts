import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

@Component({
    selector: 'app-root',
    template: `
    <app-menu/>
    <div style="margin-left: 56px;">
      <router-outlet></router-outlet>
    </div>
    `,
    standalone: true,
    imports: [RouterOutlet, MenuComponent]
})
export class AppComponent { }
