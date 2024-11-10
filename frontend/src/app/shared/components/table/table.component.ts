import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TableHeaderModel } from 'src/app/shared/models/table.model';
import { AFButtonComponent } from "../button/button.component";

@Component({
  selector: 'af-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    AFButtonComponent,
    AFButtonComponent
],
})
export class AFTableComponent {
  @Input() public columns: TableHeaderModel[]=[];
  @Input() public values: any;
  @Input() public paginator: boolean = false; 
  @Input() public rows: number = 2;
  public firstPage: number = 0;

 public deleteRow(_t14: any):void {
   
    }
  public  editRow(_t14: any):void {

    }

}
