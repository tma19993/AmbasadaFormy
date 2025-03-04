import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormSubmittedEvent, NonNullableFormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { MapToPublicUserData } from 'src/app/core/untils';
import { GenderArray } from 'src/app/shared/constants';
import { EnumIconFloat } from 'src/app/shared/enums';
import { GenderModel, inputIconConfig, UserDataPublic } from 'src/app/shared/models';




@Component({
  selector: 'app-profile-data-editor',
  templateUrl: './profile-data-editor.component.html',
  styleUrl: './profile-data-editor.component.scss'
})
export class ProfileDataEditorComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private profileService = inject(ProfileService);
  private dialogRef = inject(DynamicDialogRef); 
  private message = inject(AfMessageService);
  public genderCheckboxDisabled: boolean = false;
  public form: FormGroup = this.fb.group({
    firstName: [this.userData.firstName, Validators.required],
    lastName: [this.userData.lastName, Validators.required],
    login: [this.userData.login, Validators.required],
    email: [this.userData.email, [Validators.required,Validators.email]],
    phoneNumber: [this.userData.phoneNumber, [Validators.required,Validators.pattern("[0-9]{9}")]],
    address: [this.userData.address, Validators.required],
    gender: [this.userData.gender, Validators.required],
  })

  public genderArray: GenderModel[] = GenderArray;

  public ngOnInit(): void {
    this.setGender();
    this.form.events.subscribe(event => {
      if (event instanceof FormSubmittedEvent) {
        this.updateData();
      }
    })
  }

  public getGender(event: any, id: number): void {
    this.genderArray[id].checked = event;
    this.genderCheckboxDisabled = this.genderArray.some(
      (gender) => gender.checked
    );
    this.form.controls["gender"].setValue(this.genderArray[id].key);
  }

  public setGender(): void {
    const gender = this.genderArray.find(gender => gender.key === this.userData.gender);
    if (gender) {
      gender.checked = true;
    }
    this.genderCheckboxDisabled = this.genderArray.some(
      (gender) => gender.checked
    );
  }

  public get userData(): UserDataPublic {
    return MapToPublicUserData(this.profileService.userData);
  }

  private updateData(): void {
    if(this.form.invalid){
      this.message.addErrorMessage("błąd")
      return;
    }
    this.profileService.updateUserData(this.form.value).subscribe();
    this.dialogRef.close(this.form.value);
      this.dialogRef.destroy();
  }
}
