import { Component, inject, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, FormSubmittedEvent, Validators } from "@angular/forms";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ProfileService } from "src/app/core/services";
import { userDataModel } from "src/app/shared/models";
import { TrainingModel } from "src/app/shared/models/training.model";

@Component({
  selector: "af-add-training",
  templateUrl: "./add-training.component.html",
  styleUrl: "./add-training.component.scss"
})
export class AFAddTrainingComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private profileService: ProfileService = inject(ProfileService);
  private dialogRef: DynamicDialogRef = inject(DynamicDialogRef);

  public form: FormGroup = this.fb.group({
    title: this.fb.control("", Validators.required),
    description: this.fb.control("", Validators.required),
    exercises: this.fb.array([]),
  })

  private ref: DynamicDialogRef;

  public ngOnInit(): void {
    this.addExercise();
    this.form.events.subscribe(event => {
      if (event instanceof FormSubmittedEvent) {
        this.onSubmit();
      }
    })
  }

  public ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  public addExercise(): void {
    (this.form.get("exercises") as FormArray).push(this.fb.control('', Validators.required));
  }

  public removeExercise(index: number): void {
    (this.form.get("exercises") as FormArray).removeAt(index);
  }

  private onSubmit(): void {
    const initialData = this.profileService.userDataSignal().trainings;

    const dataToAdd: TrainingModel = {
      ...this.form.value,
      createAt: new Date(),
      forDelete: false
    }

    let submitedData: userDataModel;
    if (!initialData) { submitedData = { trainings: [dataToAdd] } }
    else {
      initialData.push(dataToAdd)
      submitedData = { trainings: initialData }
    }
    this.profileService.updateUserData(submitedData).subscribe();
    this.dialogRef.close(this.form.value);
    this.dialogRef.destroy();
  }
}
