import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

const PageTitlesByURL = new Map()
  .set('/books', "PAGES.BOOKS.TITLE")
  .set('/home', "PAGES.MAIN.TITLE");

export const PageTitleResolver: ResolveFn<string> =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const pageTitle = PageTitlesByURL.get(state.url);
  return pageTitle ? pageTitle : '404 - page title not set';
};
