import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AFTileComponent } from '../../../shared/components/tile/tile.component';
import { TranslateModule } from '@ngx-translate/core';
import { AFButtonComponent } from '../../../shared/components/button/button.component';


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
  @Input() public passId: string;

  @Output() public emitOrder:EventEmitter<{passId: string}> = new EventEmitter();

  public options: string[];

  constructor(){}

  public ngOnInit(): void {
      this.options = this.getOptions(this.name);
  }

  public orderGymPass(): void  {
    this.emitOrder.emit({passId: this.passId})
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
