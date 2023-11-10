# New Angular 16 Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9. <br>
After this commit (10.11.2023) any changes to the platform will be done on main branch where I'll be upgrading the project to `Angular 17`
- [Angular 17 Blog](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)
- [Update Guide](https://update.angular.io/?l=3&v=16.0-17.0)

#### When adding main pages
See [this commit](https://github.com/Sara-pixie/new-angular-project/commit/b5d17be7fa59c1565cea739c6b29772fb94b2d50) as example of adding a main page to the platform.

## About Angular 16
- [Angular Blog](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d)
- [Medium blog](https://medium.com/@evincedevelop/whats-new-in-angular-16-a-deep-dive-into-the-latest-features-5985d477003c)
- [Standalone](https://angular.io/guide/standalone-migration) see [`angular.json`](https://github.com/Sara-pixie/new-angular-project/blob/master/angular.json) file for `schematics`
- [Routes Input Binding](https://angular.io/api/router/withComponentInputBinding) `withComponentInputBinding` as part of the `provideRouter` in [`main.ts`](https://github.com/Sara-pixie/new-angular-project/blob/master/src/main.ts) file
- Translate Service (use `npm install @ngx-translate/core --save` and `npm install @ngx-translate/http-loader --save` commands to install, then add the `TranslateModule.forRoot(translateModuleConfig)` with the config const to `importProvidersFrom` in [`main.ts`](https://github.com/Sara-pixie/new-angular-project/blob/master/src/main.ts) file). In every standalone component.ts you should import `TranslateModule` with `imports: [TranslateModule]`

## Angular Material
- [Getting Started](https://material.angular.io/guide/getting-started)
- [Components](https://material.angular.io/components/categories)
- [icons](https://fonts.google.com/icons) use `<mat-icon fontIcon="iconName"></mat-icon>`
- To override material styling (because they make weird headings h1-6) create [new scss file](https://github.com/Sara-pixie/new-angular-project/blob/master/src/theme.scss) and make sure to link it in [`angular.json`](https://github.com/Sara-pixie/new-angular-project/blob/master/angular.json) file under `styles`
- Added `Material Carousel` see this [folder](https://github.com/Sara-pixie/new-angular-project/tree/master/src/app/components/carousel) for details (the code has been borrowed from another repository and tweaked to fit into Angular 16 project)

## Public API
- [Options](https://github.com/public-apis/public-apis)
<br><br>Choosen theme = Books Search with Cat Facts on home page:
- [meowfacts](https://github.com/wh-iterabb-it/meowfacts)
- [Google Books API](https://developers.google.com/books/docs/v1/reference/volumes)

## Netlify build
- [YouTube tutorial](https://www.youtube.com/watch?v=4992d7KQz0k)
- [deployed page](https://master--peppy-eclair-b9d0b2.netlify.app/)
