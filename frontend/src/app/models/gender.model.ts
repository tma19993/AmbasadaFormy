export type GenderModel = {
  name: string;
  key: genderKey;
  checked: boolean;
}

export enum genderKey {
  Male = 'male',
  Female = 'female',
  other = 'other',
}
