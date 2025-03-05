import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner/spinner.service';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const router: Router = inject(Router);
  const spinnerService = inject(SpinnerService)

  spinnerService.showSpinner();
  return next(req).pipe(
    finalize(() => {
      spinnerService.hide();
    })
  );
};
