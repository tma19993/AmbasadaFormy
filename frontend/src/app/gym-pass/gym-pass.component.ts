import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { GymPassesService } from 'src/app/core/services';
import { GymPassModel } from 'src/app/shared/models';

@Component({
  selector: 'af-gym-pass',
  templateUrl: './gym-pass.component.html',
  styleUrls: ['./gym-pass.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GymPassComponent {
  private gymPassesService: GymPassesService = inject(GymPassesService);
  private router: Router = inject(Router);

  public gymPasses: Signal<GymPassModel[]> = this.gymPassesService.gymPassesSignal;
  constructor() {
    this.gymPassesService.getGymPasses();
  }

  public orderGymPass(): void {
    this.router.navigate(["profile/gym-pass"]);
  }

}
