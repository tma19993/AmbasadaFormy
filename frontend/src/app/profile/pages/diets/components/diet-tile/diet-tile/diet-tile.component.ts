import { Component, Input, input } from '@angular/core';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { DietModel } from 'src/app/shared/models';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'af-diet-tile',
  standalone: true,
  imports: [AFTileComponent, SharedModule],
  templateUrl: './diet-tile.component.html',
  styleUrl: './diet-tile.component.scss'
})
export class DietTileComponent {
  @Input() public diets: DietModel[] = [];
  public activationMode = input.required<boolean>();
  public removalMode = input.required<boolean>();
  private initialDiets: DietModel[];


  public selectForAction(diet: DietModel): void {
    if (this.removalMode()) diet.forDelete = !diet.forDelete;
    if (diet.disabled === true) {
      return;
    }
    if (this.activationMode()) {
      diet.active = !diet.active;
      const activeDiet = this.diets?.filter(diet => diet.active == true);

      this.diets?.forEach(loopDiet => {
        if (activeDiet?.length !== 0) {
          if (loopDiet.active === false) {
            loopDiet.disabled = true;
          }
        }
        else {
          loopDiet.disabled = false
        }
      })
    };
  }

}
