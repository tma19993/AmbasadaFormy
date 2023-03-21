import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { examplePersonalTrainerModel } from './autocomplete.model';

@Component({
  selector: 'af-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

@Input() public suggestions: examplePersonalTrainerModel[] = [];
@Input() public dropdown: boolean = false;
@Input() public filedName: string = "name";
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
