import { Component, Input } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { Categories } from 'src/app/shared/models/radiobutton.model';
import { PrimengModule } from '../../modules/primeng/primeng.module';

@Component({
  selector: 'af-radio-buttons',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
  standalone: true,
  imports: [SharedModule, PrimengModule],
})
export class AFRadioButtonsComponent {
  @Input() categories: Categories[] = [];
  @Input() disabled: boolean = false;
  @Input() selectedCategory: Categories | null = null;

  constructor() { }
}
