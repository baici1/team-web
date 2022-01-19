import dayjs from 'dayjs';

export function timeFormat(time) {
  return dayjs(time).format('MM-DD');
}
