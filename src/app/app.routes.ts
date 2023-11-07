import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { of } from "rxjs";

export const ROUTES: Routes = [
  {
    path: 'home', component: HomePageComponent,
    resolve: { pageTitle: () => { return of('Welcome!')} }
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
