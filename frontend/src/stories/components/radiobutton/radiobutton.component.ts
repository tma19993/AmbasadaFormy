import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Categories } from 'src/stories/interfaces/radiobutton.model';

@Component({
  selector: 'af-radio-buttons',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
  standalone: true,
  imports:[CommonModule, RadioButtonModule, FormsModule]
})
export class RadioButtonsComponent {
  @Input() categories: Categories[] = [];
  @Input() disabled: boolean = false;
  @Input() selectedCategory: Categories | null = null;

  constructor() {}
}
