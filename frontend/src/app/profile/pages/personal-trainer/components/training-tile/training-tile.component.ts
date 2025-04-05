import { Component, computed, inject, Input, input, Signal } from '@angular/core';
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
  @Input() public trainings: TrainingModel[] = [];
  public activationMode = input.required<boolean>();
  public removalMode = input.required<boolean>();

  public selectForAction(ClickedTraining: TrainingModel): void {
    if (this.removalMode()) ClickedTraining.forDelete = !ClickedTraining.forDelete;
    if (ClickedTraining.forDelete === true) return;
    if (this.activationMode()) {
      ClickedTraining.active = !ClickedTraining.active;
      const activeTraining = this.trainings.filter((training) => training.active == true);
      this.trainings.forEach(training => {
        if (activeTraining?.length == 0) {
          if (training.active === false) training.disabled = true;
        }
        else {
          training.disabled = false;
        }
      })

    };

  }
}
