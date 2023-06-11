import { genderKey } from "./gender.model";

export interface registerData {
firstName?:string,
lastName?:string;
login?:string;
email?:string;
gender?: genderKey;
password?: string;
permission?: string;
}
