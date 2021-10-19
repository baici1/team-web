// 封装关于网站信息（session，title等）
import { getItem, setItem, removeItem } from "@/utils/storage"; // getItem和setItem是封装的操作localStorage的方法
// import { toRaw } from "vue";
export const TOKEN = "TOKEN";
const COLLAPSE = "COLLAPSE";
export default {
  namespaced: true, // 属性用于解决不同模块的命名冲突问题
  state: {
    title: "CTGU Admin", // 网站标题
    authorization: getItem(TOKEN) // 授权 token
  },
  mutations: {
    // 设置token
    // token存到vuex以及localstorage
    setToken(state, data) {
      state.authorization = data;
      // 保存到localStorage
      setItem(TOKEN, data);
    },
    // 清除token
    clearToken(state) {
      state.authorization = "";

      removeItem(TOKEN);
    },
    // 清除
    clearCollapse(state) {
      state.sidebar.collapse = "";

      removeItem(COLLAPSE);
    }
  },
  actions: {
    clearToken({ commit }) {
      // 清除token
      commit("clearToken");
      // 清除用户信息
      commit("account/clearUserinfo", "", { root: true });
    }
    // setScreenCode({ commit, state }, password) {
    //   const authorization = toRaw(state.authorization);

    //   if (!password) {
    //     try {
    //       delete authorization.screenCode;
    //     } catch (err) {
    //       console.log(err);
    //     }
    //     commit("setToken", authorization);

    //     return;
    //   }

    //   // 对密码加密
    //   //  const screenCode = new AesEncryption().encryptByAES(password);

    //   commit("setToken", {
    //     ...authorization,
    //     password,
    //   });
    // },
  }
};
