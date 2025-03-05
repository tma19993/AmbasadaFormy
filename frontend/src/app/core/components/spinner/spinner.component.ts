import { Component, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'af-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  standalone: true,
  imports: [ProgressSpinnerModule, AsyncPipe],
})
export class SpinnerComponent {
  private spinnerService: SpinnerService = inject(SpinnerService);
  public isLoading = this.spinnerService.isLoading;
}
