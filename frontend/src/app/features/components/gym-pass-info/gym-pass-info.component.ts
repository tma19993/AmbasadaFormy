import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "af-gym-pass-info",
  templateUrl: "./gym-pass-info.component.html",
  styleUrls: ["./gym-pass-info.component.scss"],

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
