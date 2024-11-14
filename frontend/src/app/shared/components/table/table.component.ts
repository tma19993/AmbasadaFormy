import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, TemplateRef } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableHeaderModel } from 'src/app/shared/models/table.model';
import { ButtonModule } from 'primeng/button';
import { AFButtonComponent } from '../button/button.component';

@Component({
  selector: 'af-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    AFButtonComponent,
  ],
})
export class AFTableComponent<T> {
  private datePipe: DatePipe = inject(DatePipe);
  @Output() public deleteRow: EventEmitter<any> = new EventEmitter;
  @Output() public editRow: EventEmitter<any> = new EventEmitter;
  @Input() editTemplate: TemplateRef<any>;
  @Input() public editable: boolean = false;
  @Input() public columns: TableHeaderModel[] = [];
  @Input() public values: T[] = [];
  @Input() public paginator: boolean = false;
  @Input() public loading: boolean = false;
  @Input() public rows: number = 2;
  @Input() public dataKey: string;
  @Input() public sortField: string;
  @Input() public sortOrder: number;
  public firstPage: number = 0;

  public delete(row: any): void {
    this.deleteRow.emit(row);
  }
  public edit(row: any): void {
    this.editRow.emit(row);
  }

  public formatIfDateString(value: any): string {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    if (typeof value === 'string' && isoDateRegex.test(value)) {
      const date = new Date(value);
      return this.datePipe.transform(date, 'dd-MM-yy HH:mm') || value;
    }
    return value;
  }

}
