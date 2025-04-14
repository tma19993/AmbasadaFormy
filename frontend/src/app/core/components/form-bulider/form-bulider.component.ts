import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AFButtonComponent } from "../../../shared/components/button/button.component";
import { FormField } from 'src/app/shared/models/form.model';
import { AFInputComponent } from 'src/app/shared/components/input/input.component';
import { AFInputTextareaComponent } from 'src/app/shared/components/inputTextarea/inputtextarea.component';
import { AFPasswordComponent } from 'src/app/shared/components/password/password.component';
import { AFCheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component';
import { AFRadioButtonsComponent } from 'src/app/shared/components/radiobutton/radiobutton.component';
import { CalendarComponent } from 'src/app/shared/components/calendar/calendar.component';

@Component({
  selector: 'af-form-bulider',
  standalone: true,
  imports: [SharedModule,  AFButtonComponent, AFInputComponent, AFInputTextareaComponent, AFPasswordComponent, AFCheckboxComponent, AFRadioButtonsComponent, CalendarComponent],
  templateUrl: './form-bulider.component.html',
  styleUrl: './form-bulider.component.scss'
})
export class FormBuliderComponent implements OnInit {
@Input() formGroup: FormField[];
@Input() submitButtonLabel: string = 'Submit';
@Input() cancelButtonLabel: string = 'Cancel';
@Input() resetButtonLabel: string = 'Reset';

public  dynamicForm!: FormGroup;

public ngOnInit(): void {
  this.dynamicForm = new FormGroup({});
  this.formGroup.forEach((field: FormField) => {
    this.dynamicForm.addControl(field.name, field.value);
  });
  console.log(this.dynamicForm);
}
}
