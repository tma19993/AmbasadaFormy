import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AFButtonComponent } from "src/app/shared/components/button/button.component";
import { AFTileComponent } from "src/app/shared/components/tile/tile.component";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "af-gym-pass-info",
  templateUrl: "./gym-pass-info.component.html",
  styleUrls: ["./gym-pass-info.component.scss"],
  standalone: true,
  imports: [SharedModule, AFTileComponent, AFButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AFGymPassInfoComponent {
  @Input() title: string;
  @Input() id: string;
  @Input() label1: string;
  @Input() label2: string;
  @Input() price: number;
  @Input() buttonId: string;


  constructor(private router: Router) { }

  public routeToGymPasses(): void {
    this.router.navigate(["profile/gym-pass"]);
  }
}
