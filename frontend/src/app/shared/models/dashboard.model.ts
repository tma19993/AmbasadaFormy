export type DashboardModel = {
  logins: LastTimeModel,
  newUsers: LastTimeModel,
  newGymPass: LastTimeModel,
  totalUsers: number,
  activeGymPass: number,
}

export type TimeSelectedDashboardModel = {
  logins?: number,
  newUsers?: number,
  newGymPass?: number
}

export type LastTimeKeys = 'lastHour' | 'last24Hours' | 'last7Days';

export type LastTimeModel = {
  [key in LastTimeKeys]: number;
};