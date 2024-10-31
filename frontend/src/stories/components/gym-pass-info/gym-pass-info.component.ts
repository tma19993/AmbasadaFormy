import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AFTileComponent } from "../tile/tile.component";
import { AFButtonComponent } from "../button/button.component";

@Component({
  selector: "af-gym-pass-info",
  templateUrl: "./gym-pass-info.component.html",
  styleUrls: ["./gym-pass-info.component.scss"],
  standalone: true,
  imports: [CommonModule,
    AFButtonComponent,
    AFTileComponent,
    TranslateModule
  ],
})
export class AFGymPassInfoComponent {
 @Input() title: string;
@Input() label1: string;
@Input() label2: string;
@Input() price: number;
@Input() buttonId: string;

constructor(private router: Router){}

public routeToGymPasses(): void  {
  this.router.navigate(["profile/gym-pass"]);
  }
}
