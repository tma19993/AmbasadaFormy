import { Component, inject, input, output, Signal } from '@angular/core';
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
  public onSelectedItems = output<{ diets: DietModel[] }>();
  public userData: Signal<userDataModel> = this.profileService.userDataSignal;

  public get isDietMarkedForActive(): boolean {
    return this.userData().diets?.some((diet) => diet.active === true)!;
  }

  public selectForAction(diet: DietModel): void {
    console.log(diet);
    if (this.isDietMarkedForActive && !diet.active) {
      return;
    }
    if (this.removalMode()) diet.forDelete = !diet.forDelete;
    if (this.activationMode()) diet.active = !diet.active;
    const selectedDiets = this.userData().diets?.filter(diet => diet.forDelete || diet.active);
    this.onSelectedItems.emit({ diets: selectedDiets! });
  }
}
