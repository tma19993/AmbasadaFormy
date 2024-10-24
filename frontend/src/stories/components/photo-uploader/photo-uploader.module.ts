import {  NgModule} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoUploaderComponent } from './photo-uploader.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhotoUploaderComponent
  ],
  exports: [
    PhotoUploaderComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    TranslateModule.forChild(),
  ],
})
export class AFPhotoUploaderModule { }
