export interface GenderModel {
  name: string;
  key: genderKey;
  checked: boolean;
}

export enum genderKey {
  men = 'men',
  woman = 'woman',
  other = 'other',
}
