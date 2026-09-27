import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@sl/web/data-access/auth';

export const canActivateNonAuth: CanActivateFn = () => {
  return !inject(AuthService).isAuthorized$.value;
};
