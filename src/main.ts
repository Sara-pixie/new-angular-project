import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ROUTES } from './app/app.routes';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const translateModuleConfig:  TranslateModuleConfig = {
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
};

const MODULES = [
  BrowserModule,
  HttpClientModule,
  TranslateModule.forRoot(translateModuleConfig),
];

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(...MODULES),
        provideRouter(ROUTES, withComponentInputBinding()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
