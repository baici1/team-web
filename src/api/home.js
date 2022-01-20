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
export function GetCompetitionTimeList() {
  return request({
    url: '/home/game/time',
    method: 'get',
  });
}

