export const attendanceRate = function (
  attendance: number,
  practiceSessions: number,
): number {
  return Math.round((attendance / practiceSessions) * 100);
};

export const playerLabel = function (
  name: string,
  nickname?: string,
  shirtNumber?: number,
): string {
  if (nickname !== undefined) {
    return nickname;
  }
  return name;
};
