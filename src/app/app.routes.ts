import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PageTitleResolver } from "./resolvers/PageTitle.resolver";
import { BooksPageComponent } from "./pages/books-page/books-page.component";
import { BookDetailResolver } from "./resolvers/book-details.resolver";
import { BookDetailPageComponent } from "./pages/book-detail-page/book-detail-page.component";

const pageBaseName = "(A16)Cat's Book Nook | ";
export const ROUTES: Routes = [
  {
    path: 'home', title: pageBaseName+'Home', component: HomePageComponent,
    resolve: { pageTitle: PageTitleResolver }
  },
  {
    path: 'books', title: pageBaseName+'Books',
    children: [
      {
        path: '', pathMatch: 'full', component: BooksPageComponent,
        resolve: { pageTitle: PageTitleResolver },
      },
      {
        path: 'book-detail/:title/:id', component: BookDetailPageComponent,
        resolve: { book: BookDetailResolver },
      },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
