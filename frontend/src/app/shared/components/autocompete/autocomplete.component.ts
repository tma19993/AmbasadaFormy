import { Component, Input } from '@angular/core';
import { examplePersonalTrainerModel } from 'src/app/shared/models/autocomplete.model';
import { SharedModule } from '../../shared.module';
import { PrimengModule } from '../../modules/primeng/primeng.module';


@Component({
  selector: 'af-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  standalone: true,
  imports: [SharedModule, PrimengModule]
})
export class AFAutocompleteComponent {

  @Input() public suggestions: examplePersonalTrainerModel[] = [];
  @Input() public dropdown: boolean = false;
  @Input() public fieldName: string = "name";
  @Input() public minLength: number = 1;
  @Input() public maxLength: number = 255;
  @Input() public multiple: boolean = false;

  public filteredValues: examplePersonalTrainerModel[] = [];
  public selectedValue: string = "";
  constructor() {
  }




  public filter(event: any) {
    this.filteredValues = this.suggestions.filter(value => {
      return value.name?.toLowerCase().indexOf(event.query.toLowerCase()) !== -1;
    });
  }
}
