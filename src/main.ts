import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ROUTES } from './app/app.routes';

const MODULES = [
  BrowserModule,
  HttpClientModule,
];

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(...MODULES),
        provideRouter(ROUTES, withComponentInputBinding()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
