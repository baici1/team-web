<template>
  <div :class="{ 'sign-up-mode': signUpMode, container: true }">
    <div class="form-warp">
      <form class="sign-in-form">
        <h2 class="form-title">登录</h2>
        <input placeholder="用户名" />
        <input type="password" placeholder="密码" />
        <div class="submit-btn">立即登录</div>
      </form>
      <form class="sign-up-form">
        <h2 class="form-title">注册</h2>
        <input placeholder="用户名" />
        <input type="password" placeholder="输入密码" />
        <input type="password" placeholder="再次输入密码" />
        <div class="submit-btn">立即注册</div>
      </form>
    </div>
    <div class="desc-warp">
      <div class="desc-warp-item sign-up-desc">
        <div class="content">
          <button id="sign-up-btn" @click="signUpMode = !signUpMode">注册</button>
          <div class="sign-up-text">敏于观察，勤于思考，善于综合，勇于创新。</div>
        </div>
        <img src="@/assets/svg/log.svg" alt="" />
      </div>
      <div class="desc-warp-item sign-in-desc">
        <div class="content">
          <button id="sign-in-btn" @click="signUpMode = !signUpMode">登录</button>
          <div class="sign-up-text">
            Sensitive to observation, diligent in thinking, good at synthesis, and courage to innovate.
          </div>
        </div>
        <img src="@/assets/svg/register.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: 'Login',
  setup() {
    const signUpMode = ref(false);
    return {
      signUpMode,
    };
  },
};
</script>

<style lang="scss" src="@/assets/css/login.scss" scoped></style>
