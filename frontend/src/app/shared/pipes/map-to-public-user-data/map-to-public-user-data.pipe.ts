import { Pipe, PipeTransform } from '@angular/core';
import { userDataModel, UserDataPublic } from '../../models';

@Pipe({
  name: 'mapToPublicUserData',
  standalone: true
})
export class MapToPublicUserDataPipe implements PipeTransform {

  transform(value: userDataModel): UserDataPublic {
    return {
      firstName: value.firstName,
      lastName: value.lastName,
      login: value.login,
      email: value.email,
      phoneNumber: value.phoneNumber,
      address: value.address,
      gender: value.gender
    };
  }

}
