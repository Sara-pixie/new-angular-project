import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

const PageTitlesByURL = new Map()
  .set('/home', "PAGES.MAIN.TITLE");

export const PageTitleResolver: ResolveFn<string> =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const url = state.url;
  const pageTitle = PageTitlesByURL.get(state.url);
  console.log('url',url,'pageTitle',pageTitle);
  return pageTitle ? pageTitle : '404 - page title not set';
};
