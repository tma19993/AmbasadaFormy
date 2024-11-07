import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'af-gym-pass-card',
  templateUrl: "./gym-pass-card.component.html",
  styleUrls: ['./gym-pass-card.component.scss'],

})
export class AFGymPassCardComponent implements OnInit {

  private router: Router = inject(Router);

  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public price: string;
  @Input() public name: string;
  @Input() public buttonId: string;
  @Input() public smallerCard: boolean = false;
  @Input() public passId: string;

  public options: string[];

  public ngOnInit(): void {
      this.options = this.getOptions(this.name);
  }

  public orderGymPass(): void  {
    this.router.navigate(["profile/gym-pass"]);
  }
  
  private getOptions(name: string): string[] {
  switch (name) {
    case 'development':
      return ['gymPass.developmentPass.access', 'gymPass.developmentPass.monthlyPay', 'gymPass.shared.FirstPay', 'gymPass.shared.Water'];
    case 'fun':
      return ['gymPass.shared.Unlimited', 'gymPass.funPass.access', 'gymPass.shared.guarantee', 'gymPass.shared.FirstPay', 'gymPass.shared.freeze', 'gymPass.shared.cancel', 'gymPass.shared.Water'];
    case 'health':
      return ['gymPass.shared.Unlimited', 'gymPass.healthPass.allday', 'gymPass.shared.guarantee', 'gymPass.healthPass.Lackfirstpay', 'gymPass.healthPass.freetraining', 'gymPass.shared.freeze', 'gymPass.shared.cancel', 'gymPass.shared.Water'];
    default:
      return [];
  }
}
}
