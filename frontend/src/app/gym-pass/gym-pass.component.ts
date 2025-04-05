import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GymPassesService } from 'src/app/core/services';
import { GymPassModel } from 'src/app/shared/models';

@Component({
  selector: 'af-gym-pass',
  templateUrl: './gym-pass.component.html',
  styleUrls: ['./gym-pass.component.scss'],
})
export class GymPassComponent implements OnInit, AfterViewInit {
  private gymPassesService: GymPassesService = inject(GymPassesService);
  private route = inject(ActivatedRoute);
  private router: Router = inject(Router);
  public gymPasses: Signal<GymPassModel[]> = this.gymPassesService.gymPassesSignal;

  public ngOnInit(): void {
    this.gymPassesService.getGymPasses();
  }

  public ngAfterViewInit(): void {
    let scrolled = false;
    this.route.fragment.subscribe(fragment => {
      if (fragment && !scrolled) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            scrolled = true;
          }
        }, 300)
      }
    })
  }

  public orderGymPass(): void {
    this.router.navigate(["profile/gym-pass"]);
  }

}
