import { Component, inject, OnInit } from '@angular/core';
import { GymPassesService } from 'src/app/core/services';
import { GymPassModel } from 'src/app/shared/models';

@Component({
  selector: 'af-edit-gym-passes',
  templateUrl: './edit-gym-passes.component.html',
  styleUrl: './edit-gym-passes.component.scss'
})
export class AFEditGymPassesComponent implements OnInit {
private gymPassService: GymPassesService = inject(GymPassesService);

  public gymPasses: GymPassModel[] = [];

  public ngOnInit(): void {
    this.gymPasses = this.gymPassService.gymPassesSignal();
    console.log(this.gymPasses);
  }

  public editGymPass(gymPass: GymPassModel): void {
    console.log(gymPass);
    
  }
  public deleteGymPass(id: string): void {
    console.log(id);
  }
  private getGymPasses(): void {
    if (this.gymPasses.length == 0) {
      this.gymPassService.getGymPasses();
    }
  }
}
