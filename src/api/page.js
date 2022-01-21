import request from '@/utils/request';

export function GetAArticle(Id) {
  return request({
    url: '/page/article',
    method: 'post',
    data: {
      id: Number(Id),
    },
  });
}

export function GetCompetitions(data) {
  return request({
    url: '/page/competitions',
    method: 'post',
    data,
  });
}
