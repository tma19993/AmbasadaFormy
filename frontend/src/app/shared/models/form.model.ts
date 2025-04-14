import { ValidatorFn } from "@angular/forms";

export type FormFieldType = 'text' | 'password' | 'checkbox' | "radioButtons"  | 'textarea' | 'calendar';

export interface FormFieldOption {
  label: string;
  value: any;
}

export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  floatLabel?: boolean; 
  value?: any;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  options?: FormFieldOption[]; 
  validators?: ValidatorFn[]; 
}

export interface FormFieldGroup {
  name: string;
  label: string;
  fields: FormField[];
  submitButton: boolean;
  cancelButton: boolean;
  resetButton: boolean;
}