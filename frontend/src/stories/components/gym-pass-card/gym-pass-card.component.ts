import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'af-gym-pass-card',
  templateUrl: "./gym-pass-card.component.html",
  styleUrls: ['./gym-pass-card.component.scss'],
})
export class AFGymPassCardComponent implements OnInit{
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public price: string;
  @Input() public name: string;
  @Input() public buttonId: string;
  @Input() public smallerCard: boolean = false;

  public options: string[];

  constructor(private router: Router){}

  public ngOnInit(): void {
      this.options = this.getOptions(this.name);
  }

  public routeToGymPasses(): void  {
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
