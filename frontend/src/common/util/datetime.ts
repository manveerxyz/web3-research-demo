import { DateTime } from 'luxon';

export const secondsToHoursMinuteStr = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);

  const h = hours > 0 ? hours + (hours === 1 ? ' hour, ' : ' hours, ') : '';
  const m = minutes > 0 ? minutes + (minutes === 1 ? ' min' : ' mins') : '';
  return `${h}${m}`.trim();
};

export const dobToDateAndAge = (dob: string) => {
  const dt = DateTime.fromISO(dob);
  const date = dt.toLocaleString(DateTime.DATE_FULL);
  const age = -dt.diffNow('years').years;

  return `${date} (${age.toFixed(0)} years old)`;
};
