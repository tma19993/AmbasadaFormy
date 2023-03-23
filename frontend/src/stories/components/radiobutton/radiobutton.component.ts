import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floatlabel',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
})
export class RadioButtonComponent {
  selectedCategory: any = null;

  categories: any[] = [
      { name: 'Mężczyzna', key: 'M' },
      { name: 'Kobieta', key: 'K' },
      { name: 'Inne', key: 'I' },
      { name: 'Nie chce podawać', key: 'N' }
  ];

  @Input() public disabled: boolean = false;
  constructor() {}
}
