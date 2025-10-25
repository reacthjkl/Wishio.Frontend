import {
	HttpErrorResponse,
	type HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from './loading.service';
import { NOTYF } from './notyf.token';

let totalRequests: number = 0;

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
	const loadingSvc = inject(LoadingService);
	const notyf = inject(NOTYF);

	loadingSvc.isLoading.set(true);
	totalRequests++;

	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			notyf.error('An error has occurred. Please try again later.');
			return throwError(() => error);
		}),
		finalize(() => {
			totalRequests--;
			if (totalRequests === 0) loadingSvc.reset();
		}),
	);
};
