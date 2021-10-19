import request from "@/utils/request";

/**
 * @description:登录接口
 * @param {*} data 登录请求参数
 * @return {*} 返回响应信息
 */
export function SignIn(data) {
  return request({
    url: "/signin",
    method: "post",
    data
  });
}

/**
 * @description:注册接口
 * @param {*} data 登录请求参数
 * @return {*} 返回响应信息
 */
export function SignUp(data) {
  return request({
    url: "/signup",
    method: "post",
    data
  });
}
