import { Pipe, PipeTransform } from '@angular/core';
import { TimeSelectedDashboardModel } from '../models';

@Pipe({
  name: 'transformStatisticTime',
  standalone: true
})
export class TransformStatisticTimePipe implements PipeTransform {

  transform(dashboard: any, code: string): TimeSelectedDashboardModel | null{
    if (!dashboard || !dashboard.logins || !dashboard.newUsers || !dashboard.newGymPass) {
      return  null;
    }
    return {
      logins: dashboard.logins[code],
      newUsers: dashboard.newUsers[code],
      newGymPass: dashboard.newGymPass[code],
    };
  }

}
