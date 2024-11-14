import { genderKey, GenderModel } from "../models";

export const  GenderArray: GenderModel[] = [
    { name: 'Male', checked: false, key: genderKey.Male },
    { name: 'Female', checked: false, key: genderKey.Female },
    { name: 'Other', checked: false, key: genderKey.other },
  ];