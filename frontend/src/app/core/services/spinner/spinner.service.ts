import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isLoading = new BehaviorSubject<boolean>(false);
  public loadingActivation = signal(true);

  public showSpinner(): void {
    if (this.loadingActivation() == false) return;
    this.isLoading.next(true);
  }

  public hide(): void {
    if (this.loadingActivation() == false) return;
    this.isLoading.next(false);
  }
}
