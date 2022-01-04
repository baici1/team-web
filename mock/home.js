export default [
  {
    url: '/getNews',
    method: 'get',
    timeout: 1000,
    statusCode: 200,
    response: () => {
      let news = [];
      for (let i = 0; i < 10; i++) {
        news.push({
          title: '@csentence()',
          time: '@date()',
        });
      }
      return {
        code: 200,
        msg: '登录成功',
        data: news,
      };
    },
  },
];
