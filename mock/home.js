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
          id: '1',
        });
      }
      return {
        code: 200,
        msg: '登录成功',
        data: news,
      };
    },
  },
  {
    url: '/getPage',
    method: 'post',
    timeout: 1000,
    statusCode: 200,
    response: ({ body }) => {
      let pages = [];
      for (let i = 0; i < 10; i++) {
        pages.push({
          title: '@csentence()',
          tips: '@cparagraph()',
          time: '@date()',
        });
      }
      return {
        code: 200,
        msg: '登录成功',
        data: pages,
      };
    },
  },
  {
    url: '/getlist',
    method: 'post',
    timeout: 1000,
    statusCode: 200,
    response: ({ body }) => {
      console.log('%c 🥤 body: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', body);

      let pages = [];
      for (let i = 0; i < body.num; i++) {
        pages.push({
          title: '@csentence()',
          tips: '@cparagraph()',
          time: '@date()',
        });
      }
      return {
        code: 200,
        msg: '登录成功',
        data: pages,
      };
    },
  },
];
