import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Bootstrap the Angular application with the necessary providers
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(CommonModule),
    provideHttpClient(withFetch()) // Enable fetch API support
  ]
})
.catch(err => console.error(err));
