<template>
  <div :class="{ 'sign-up-mode': signUpMode, container: true }">
    <div class="form-warp">
      <!-- 登录相关表单 -->
      <el-form ref="SignInFormRef" :model="signinState" class="sign-in-form" :rules="signinRules" status-icon>
        <h2 class="form-title">登录</h2>
        <el-form-item name="stuid" prop="stuid">
          <el-input v-model="signinState.stuid" class="sign-in-input" placeholder="输入学号" />
        </el-form-item>
        <el-form-item name="password" prop="password">
          <el-input v-model="signinState.password" type="password" class="sign-in-input" placeholder="输入密码" />
        </el-form-item>
        <!-- <input placeholder="用户名" />
        <input type="password" placeholder="密码" /> -->
        <el-button type="primary" class="submit-btn" :loading="loading" @click="signin"> 登录 </el-button>
      </el-form>
      <!-- 注册相关表单 -->
      <el-form ref="SignUpFormRef" :model="signupState" class="sign-up-form" :rules="signupRules">
        <h2 class="form-title">注册</h2>
        <el-form-item name="stuId" hasFeedback>
          <el-input v-model="signupState.stuId" class="sign-in-input" placeholder="输入学号" />
        </el-form-item>
        <el-form-item name="password1" hasFeedback>
          <el-input v-model="signupState.password1" type="password" class="sign-in-input" placeholder="输入密码" />
        </el-form-item>
        <el-form-item name="password2" hasFeedback>
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
      stuid: '',
      password: '',
    });
    // 表单验证规则
    const signinRules = SignInRules;
    const signupRules = SignUpRules;
    const loading = ref(false);
    // 登录提交功能
    const signin = async () => {
      loading.value = true;
      // 按钮处于加载状态
      // 获取数据
      const res = await SignIn(signinState);
      console.log('%c 🥐 data: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', res);
      if (res.code != 200) {
        loading.value = false;
        ElMessage.error(res.msg);
        return;
      }
      // 保存storage
      store.commit('app/setToken', res.data.token);
      // 跳转页面
      router.push('/user/home');
      loading.value = false;
    };
    // 注册提交功能
    const signup = async () => {
      loading.value = false;
      loading.value = true;
      SignUpFormRef.value
        .validate()
        .then(async () => {
          console.log('%c 🥒 signupState: ', 'font-size:20px;background-color: #465975;color:#fff;', signupState);
          const res = await SignUp(signupState);
          console.log('%c 🍕 res: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', res);
          if (res.code != 200) {
            ElMessage.error(res.msg);
            return;
          }
          // 注册成功后直接跳进行登录，跳转页面
          signinState.value.stuid = signupState.stuId;
          signinState.value.password = signupState.password1;
          signin();
        })
        .catch((error) => {
          console.log('error', error);
        });
      loading.value = false;
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
