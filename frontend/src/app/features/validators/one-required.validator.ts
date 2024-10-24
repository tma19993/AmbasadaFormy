import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export function OneRequiredValidator():ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
        const formGroup = group as FormGroup;
        const values = Object.values(formGroup.controls).map(control => control.value);
        return values.some(value => value) ? null : { oneRequired: true };
      };
}