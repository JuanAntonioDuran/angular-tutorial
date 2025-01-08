import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "angular-jdurfer",
        appId: "1:756740089508:web:ec94ca5b116da658962831",
        storageBucket: "angular-jdurfer.appspot.com",
        apiKey: "AIzaSyDhP3deUGI8U27tjGtlNgeq0uroskpMWYM",
        authDomain: "angular-jdurfer.firebaseapp.com",
        messagingSenderId: "756740089508",
        databaseURL: "https://angular-jdurfer-default-rtdb.europe-west1.firebasedatabase.app"
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ]
};
