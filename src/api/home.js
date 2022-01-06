import request from '@/utils/request';

export function GetNews() {
  return request({
    url: '/getNews',
    method: 'get',
  });
}

export function GetPages(data) {
  return request({
    url: '/getPage',
    method: 'post',
    data,
  });
}
export function GetList(data) {
  return request({
    url: '/getlist',
    method: 'post',
    data: {
      num: data,
    },
  });
}
