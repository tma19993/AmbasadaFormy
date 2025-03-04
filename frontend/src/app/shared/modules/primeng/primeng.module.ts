import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
@NgModule({
  exports: [
    DynamicDialogModule,
    MessagesModule,
    PaginatorModule,
    SelectButtonModule,
    AvatarModule,
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    ChartModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    FloatLabelModule,
    InputTextareaModule,
    KnobModule,
    PasswordModule,
    DividerModule,
    FileUploadModule,
    RadioButtonModule,
    RatingModule,
    TableModule
  ]
})
export class PrimengModule { }
