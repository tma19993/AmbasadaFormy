import { DietModel } from "./diet.model";
import { genderKey } from "./gender.model";
import { TrainingModel } from "./training.model";

export type userDataModel = {
_id?: string,
firstName?:string
lastName?:string
age?:string
gender?: genderKey
login?:string
password?: string
email?:string
haveCoach?:boolean
permission?: string
activeGymPass?:boolean,
gympassId?:string,
gympassName?: string,
phoneNumber?: string
address?: string,
photo?:string,
diets?: DietModel[],
trainings?: TrainingModel[],
createAt?: Date,
lastLogin?: Date,
}
