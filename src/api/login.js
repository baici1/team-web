import request from '@/utils/request';

/**
 * @description:登录接口
 * @param {*} data 登录请求参数
 * @return {*} 返回响应信息
 */
export function SignIn(data) {
  console.log('%c 🥪 data: ', 'font-size:20px;background-color: #B03734;color:#fff;', data);

  return request({
    url: '/users/login',
    method: 'post',
    data: data,
  });
}

/**
 * @description:注册接口
 * @param {*} data 登录请求参数
 * @return {*} 返回响应信息
 */
export function SignUp(data) {
  return request({
    url: '/users/register',
    method: 'post',
    data,
  });
}
