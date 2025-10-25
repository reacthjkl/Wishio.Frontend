import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { httpInterceptor } from './core/http-interceptor.function';
import { NOTYF, notyfFactory } from './core/notyf.token';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideHttpClient(withInterceptors([httpInterceptor])),
		{ provide: NOTYF, useFactory: notyfFactory },
	],
};
