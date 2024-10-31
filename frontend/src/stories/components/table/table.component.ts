import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TableHeaderModel } from 'src/stories/interfaces/table.model';

@Component({
  selector: 'af-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormsModule
  ],
})
export class AFTableComponent implements OnInit {
  @Input() public columns: TableHeaderModel[]=[];
  @Input() public values: any;
  @Input() public paginator: boolean = false; 
  @Input() public rows: number = 2;
  public firstPage: number = 0;
constructor(){

}
 public ngOnInit(): void {
  }

}
