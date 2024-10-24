import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'af-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss']
})
export class PhotoUploaderComponent {

  @Output() uploadHandler:EventEmitter<void> = new EventEmitter();
  @Output() onSelect:EventEmitter<void> = new EventEmitter();
  @Input() customUpload: boolean = false;

  constructor(){}

  public onSelectEmitter($event: any):void {
   this.onSelect.emit($event);
    }

   public uploadHandlerEmitter($event: any):void {
    this.uploadHandler.emit($event);
      }


}
