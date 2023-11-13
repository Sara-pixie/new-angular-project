import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
  MatSnackBarModule,
];

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(...MODULES),
    provideRouter(ROUTES, withComponentInputBinding()),
    provideAnimations(),
    provideClientHydration(),
  ]
};
