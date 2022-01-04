import request from '@/utils/request';

export function GetNews() {
  return request({
    url: '/getNews',
    method: 'get',
  });
}
