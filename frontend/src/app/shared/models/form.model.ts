import { ValidatorFn } from "@angular/forms";

export type FormFieldType = 'text' | 'password' | 'checkbox' | "radio-group"  | 'textarea' | 'date';

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