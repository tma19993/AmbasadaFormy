import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'af-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FileUploadModule,
    TranslateModule
  ],
})
export class AFPhotoUploaderComponent {

  @Output() uploadHandler:EventEmitter<void> = new EventEmitter();
  @Output() onSelect:EventEmitter<void> = new EventEmitter();
  @Input() customUpload: boolean = false;
  @Input() fontSize: number;

  constructor(){}

  public onSelectEmitter($event: any):void {
   this.onSelect.emit($event);
    }

   public uploadHandlerEmitter($event: any):void {
    this.uploadHandler.emit($event);
      }


}