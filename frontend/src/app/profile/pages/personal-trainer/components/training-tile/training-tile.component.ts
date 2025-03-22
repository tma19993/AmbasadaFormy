import { Component, computed, inject, input, Signal } from '@angular/core';
import { ProfileService } from 'src/app/core/services';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { userDataModel } from 'src/app/shared/models';
import { TrainingModel } from 'src/app/shared/models/training.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'af-training-tile',
  standalone: true,
  imports: [AFTileComponent, SharedModule,],
  templateUrl: './training-tile.component.html',
  styleUrl: './training-tile.component.scss'
})
export class TrainingTileComponent {
  private profileService = inject(ProfileService);
  public activationMode = input.required<boolean>();
  public removalMode = input.required<boolean>();
  public userData: Signal<userDataModel> = this.profileService.userDataSignal;

  public trainingStatus = computed(() => {
    const diets = this.userData().diets ?? [];
    return {
      active: !diets.some((diet) => diet.active === true),
    };
  })

  public selectForAction(diet: TrainingModel): void {
    if (this.trainingStatus().active && !diet.active && this.activationMode()) {
      return;
    }
    if (this.removalMode()) diet.forDelete = !diet.forDelete;
    if (this.activationMode()) diet.active = !diet.active;

  }
}
