import request from '@/utils/request';

export function GetShowSwiper() {
  return request({
    url: '/home/swiper/getlist',
    method: 'get',
  });
}

export function GetSpecificArticles(data) {
  return request({
    url: '/home/article/search',
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
