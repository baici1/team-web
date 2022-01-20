import request from '@/utils/request';

export function GetAArticle(Id) {
  console.log('%c 🦐 id: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', Id);
  return request({
    url: '/page/article',
    method: 'post',
    data: {
      id: Number(Id),
    },
  });
}
