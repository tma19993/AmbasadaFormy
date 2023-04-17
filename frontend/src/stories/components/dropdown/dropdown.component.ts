import { Component, Input } from '@angular/core';

@Component({
  selector: 'af-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() public optionLabelName:string = "name";
  @Input() public showClear:boolean = false;
  @Input() public filter:boolean = false;
  @Input() public virtualScroll:boolean = false;
  @Input() public isFloatlabel:boolean = false;
  @Input() public disabled:boolean = false;
  @Input() public placeholder: string = "";
  @Input() public floatText: string = "";
  @Input() public filterName: string = "";
  @Input() public virtualScrollItemSize: number = 1;
  @Input() public data:any;
  public selected:any;
  constructor(){}
}
