import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PageTitleResolver } from "./resolvers/PageTitle.resolver";

export const ROUTES: Routes = [
  {
    path: 'home', component: HomePageComponent,
    resolve: { pageTitle: PageTitleResolver }
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
