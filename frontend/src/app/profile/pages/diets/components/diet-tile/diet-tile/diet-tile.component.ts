import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { AFTileComponent } from 'src/app/shared/components/tile/tile.component';
import { DietModel } from 'src/app/shared/models';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'af-diet-tile',
  standalone: true,
  imports: [AFTileComponent, SharedModule],
  templateUrl: './diet-tile.component.html',
  styleUrl: './diet-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DietTileComponent {
  @Input() public diets: DietModel[] = [];
  public activationMode = input.required<boolean>();
  public removalMode = input.required<boolean>();


  public selectForAction(clickedDiet: DietModel): void {
    if (this.removalMode()) clickedDiet.forDelete = !clickedDiet.forDelete;
    if (clickedDiet.disabled === true) return;

    if (this.activationMode()) {
      clickedDiet.active = !clickedDiet.active;
      const activeDiet = this.diets?.filter(diet => diet.active == true);

      this.diets.forEach(diet => {
        if (activeDiet?.length !== 0) {
          if (diet.active === false) diet.disabled = true;
        }
        else {
          diet.disabled = false
        }
      })
    };
  }

}
