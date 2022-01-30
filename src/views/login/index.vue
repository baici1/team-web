<template>
  <div :class="{ 'sign-up-mode': signUpMode, container: true }">
    <div class="form-warp">
      <!-- 登录相关表单 -->
      <el-form ref="SignInFormRef" :model="signinState" class="sign-in-form" :rules="signinRules" status-icon>
        <h2 class="form-title">登录</h2>
        <el-form-item name="phone" prop="phone">
          <el-input v-model="signinState.phone" class="sign-in-input" placeholder="输入手机号" />
        </el-form-item>
        <el-form-item name="password" prop="password">
          <el-input v-model="signinState.password" type="password" class="sign-in-input" placeholder="输入密码" />
        </el-form-item>
        <!-- <input placeholder="用户名" />
        <input type="password" placeholder="密码" /> -->
        <el-button type="primary" class="submit-btn" :loading="loading" @click="signin"> 登录 </el-button>
      </el-form>
      <!-- 注册相关表单 -->
      <el-form ref="SignUpFormRef" :model="signupState" class="sign-up-form" :rules="signupRules" status-icon>
        <h2 class="form-title">注册</h2>
        <el-form-item hasFeedback prop="phone">
          <el-input v-model="signupState.phone" class="sign-in-input" placeholder="输入手机号" />
        </el-form-item>
        <el-form-item hasFeedback prop="password">
          <el-input v-model="signupState.password" type="password" class="sign-in-input" placeholder="输入密码" />
        </el-form-item>
        <el-form-item hasFeedback prop="password2">
          <el-input v-model="signupState.password2" type="password" class="sign-in-input" placeholder="确认密码" />
        </el-form-item>
        <el-button class="submit-btn" @click="signup">立即注册</el-button>
      </el-form>
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
          <div class="sign-up-text" style="font-size: 20px">
            Sensitive to observation, diligent in thinking, good at synthesis, and courage to innovate.
          </div>
        </div>
        <img src="@/assets/svg/register.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';
import { SignIn, SignUp } from '@/api/login.js';
import { useRouter } from 'vue-router';
import { SignInRules, signupState, SignUpRules } from './utils/rules';
// import to from 'await-to-js';
export default {
  name: 'Login',
  setup() {
    // 状态管理
    const store = useStore();
    // 路由管理
    const router = useRouter();
    // 登录注册状态切换
    const signUpMode = ref(false);
    // 管理表单
    const SignInFormRef = ref();
    const SignUpFormRef = ref();
    // 表单数据
    const signinState = ref({
      phone: '',
      password: '123456',
    });
    // 表单验证规则
    const signinRules = SignInRules;
    const signupRules = SignUpRules;
    const flag = ref(true);
    const loading = ref(false);
    // 登录提交功能
    const signin = async () => {
      // 按钮处于加载状态
      loading.value = true;

      // 进行规则校验

      SignInFormRef.value.validate((valid) => {
        console.log('%c 🍉 valid: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', valid);
        flag.value = valid;
      });
      if (!flag.value) {
        ElMessage.error('校验规则不通过');
        return;
      }
      // 获取数据
      try {
        const res = await SignIn(signinState.value);
        console.log('%c 🥐 data: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', res);
        store.commit('app/setToken', res.data.token);
        ElMessage.success(res.msg);
        // 跳转页面
        router.push('/home');
      } catch ({ response }) {
        console.log('%c 🥘 error: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', response);
        ElMessage.error(response.data.msg);
      } finally {
        loading.value = false;
      }
    };
    // 注册提交功能
    const signup = async () => {
      // 按钮处于加载状态
      loading.value = true;
      // 进行规则校验
      const flag = ref(true);
      signupRules.value.validate((valid) => {
        flag.value = valid;
      });
      if (!flag.value) {
        ElMessage.error('校验规则不通过');
        return;
      }
      try {
        const res = await SignUp(signupState.value);
        console.log('%c 🍕 res: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', res);
        // 注册成功后直接跳进行登录，跳转页面
        signinState.value.phone = signupState.value.phone;
        signinState.value.password = signupState.value.password;
        signin();
      } catch ({ response }) {
        ElMessage.error(response.data.msg);
      } finally {
        loading.value = false;
      }
    };
    return {
      SignInFormRef,
      SignUpFormRef,
      signinState,
      signinRules,
      signupState,
      signupRules,
      signin,
      signup,
      signUpMode,
      loading,
    };
  },
};
</script>

<style lang="scss" src="@/assets/css/login.scss" scoped></style>
