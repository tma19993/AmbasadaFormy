import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormSubmittedEvent, NonNullableFormBuilder } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AfMessageService, ProfileService } from 'src/app/core/services';
import { MapToPublicUserData } from 'src/app/core/untils';
import { EnumIconFloat } from 'src/app/shared/enums';
import { genderKey, GenderModel, inputIconConfig, UserDataPublic } from 'src/app/shared/models';




@Component({
  selector: 'app-profile-data-editor',
  templateUrl: './profile-data-editor.component.html',
  styleUrl: './profile-data-editor.component.scss'
})
export class ProfileDataEditorComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private profileService = inject(ProfileService);
  private dialogRef = inject(DynamicDialogRef); 

  public loginData: inputIconConfig = {
    iconClassName: 'pi-user',
    iconFloat: EnumIconFloat.left,
  };

  public mailData: inputIconConfig = {
    iconClassName: 'pi-envelope',
    iconFloat: EnumIconFloat.left,
  };
  public genderCheckboxDisabled: boolean = false;
  public form: FormGroup = this.fb.group({
    firstName: [this.userData.firstName],
    lastName: [this.userData.lastName],
    login: [this.userData.login],
    email: [this.userData.email],
    phoneNumber: [this.userData.phoneNumber],
    address: [this.userData.address],
    gender: [this.userData.gender],
  })

  public genderArray: GenderModel[] = [
    { name: 'Male', checked: false, key: genderKey.Male },
    { name: 'Female', checked: false, key: genderKey.Female },
    { name: 'Other', checked: false, key: genderKey.other },
  ];

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
    this.profileService.updateUserData(this.form.value).subscribe();
    this.dialogRef.close(this.form.value);
      this.dialogRef.destroy();
  }
}
