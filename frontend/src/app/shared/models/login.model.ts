import { userDataModel } from "./user.model"

export type LoginModel = {
   login?: string,
   passowrd?: string,
   authToken: string,
   // user:userDataModel
}