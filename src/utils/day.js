import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // import locale
dayjs.locale('zh-cn'); // use locale
export function timeFormatMD(time) {
  return dayjs(time).format('MM-DD');
}

export function timeFormatYMD(time) {
  return dayjs(time).format('YYYY-MM-DD');
}

export function getYear() {
  return [dayjs().startOf('year'), dayjs().endOf('year')];
}
