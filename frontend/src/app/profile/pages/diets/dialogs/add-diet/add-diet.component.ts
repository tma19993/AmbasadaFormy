import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormSubmittedEvent, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProfileService } from 'src/app/core/services';
import { DietModel, userDataModel } from 'src/app/shared/models';

@Component({
  selector: 'af-add-diet',
  templateUrl: './add-diet.component.html',
  styleUrl: './add-diet.component.scss'
})
export class AFAddDietComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private profileService: ProfileService = inject(ProfileService);
  private dialogRef: DynamicDialogRef = inject(DynamicDialogRef);

  public form: FormGroup = this.fb.group({
    title: this.fb.control("", Validators.required),
    subtitle: this.fb.control("", Validators.required),
    description: this.fb.control("", Validators.required),
  })

  public ngOnInit(): void {
    this.form.events.subscribe(event => {
      if (event instanceof FormSubmittedEvent) {
        this.onSubmit();
      }
    })
  }

  private onSubmit(): void {
    const initialData = this.profileService.userDataSignal().diets;
    const dataToAdd: DietModel = {
      ...this.form.value,
      createAt: new Date(),
      forDelete: false,
      active: false
    }
    let submitedData: userDataModel;
    if (!initialData) { submitedData = { diets: [dataToAdd] } }
    else {
      initialData.push(dataToAdd)
      submitedData = { diets: initialData }
    }
    this.profileService.updateUserData(submitedData).subscribe();
    this.dialogRef.close(this.form.value);
    this.dialogRef.destroy();
  }
}
