export const attendanceRate = function (
  attendance: number,
  practiceSessions: number,
): number | undefined {
  return Math.round((attendance / practiceSessions) * 100 * 10) / 10;
};

export const playerLabel = function (
  name: string,
  nickname?: string,
  shirtNumber?: number,
): string {
  let result = `${name}`;
  if (nickname != undefined) {
    result = result + ` ${nickname}`;
  }
  if (shirtNumber != undefined) {
    result = result + ` #${shirtNumber}`;
  }
  return result;
};
