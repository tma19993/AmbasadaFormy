import { userDataModel, UserDataPublic } from "../../shared/models/index";

export function MapToPublicUserData(data: userDataModel): UserDataPublic {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      login: data.login,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      gender: data.gender
    };
  }