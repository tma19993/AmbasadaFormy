import { Component, computed, inject, input, output, Signal } from '@angular/core';
import { ProfileService } from 'src/app/core/services';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { DietModel, userDataModel } from 'src/app/shared/models';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'af-diet-tile',
  standalone: true,
  imports: [AFTileComponent, SharedModule],
  templateUrl: './diet-tile.component.html',
  styleUrl: './diet-tile.component.scss'
})
export class DietTileComponent {
  private profileService: ProfileService = inject(ProfileService);
  public activationMode = input.required<boolean>();
  public removalMode = input.required<boolean>();
  public userData: Signal<userDataModel> = this.profileService.userDataSignal;


  public dietStatus = computed(() => {
    const diets = this.userData().diets ?? [];
    return {
      active: !diets.some((diet) => diet.active === true),
    };
  })

  public selectForAction(diet: DietModel): void {
    if (this.dietStatus().active && !diet.active && this.activationMode()) {
      return;
    }
    if (this.removalMode()) diet.forDelete = !diet.forDelete;
    if (this.activationMode()) diet.active = !diet.active;

  }
}
