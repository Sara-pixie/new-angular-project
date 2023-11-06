import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
];

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(...MODULES),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
