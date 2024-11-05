import { userDataModel } from "./user.model";

export type UserDataPublic = Omit<
  userDataModel,
  | "photo"
  | "gympassName"
  | "gympassId"
  | "activeGymPass"
  | "permission"
  | "haveCoach"
  | "password"
  | "age"
  | "_id"
>;