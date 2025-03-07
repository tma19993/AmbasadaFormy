import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class FormDeactivateGuard<T extends Record<'form' | 'searchForm', { dirty: boolean }>> implements CanDeactivate<T> {
  constructor(private dialog: DialogService) { }
  canDeactivate(
    component: T,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log(currentRoute);
    if (component.form?.dirty || component.searchForm?.dirty) {
      window.confirm("Czy na pewno chcesz opuścić ten widok")
    }
    return true;
  }

}
