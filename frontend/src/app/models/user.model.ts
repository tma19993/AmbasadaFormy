import { genderKey } from "./gender.model";

export interface userDataModel {
_id?: number,
firstName?:string
lastName?:string
age?:string
gender?: genderKey
login?:string
password?: string
email?:string
haveCoach?:boolean
permission?: string
activeGymPass?:boolean

}