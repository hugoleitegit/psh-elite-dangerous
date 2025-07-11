import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Importa y registra los datos de locale para español
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'; // O 'es-ES'

registerLocaleData(localeEs, 'es'); // Asegúrate de que este 'es' coincida con el 'es' en app.config.ts

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
