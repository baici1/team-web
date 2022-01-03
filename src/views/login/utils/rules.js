import { reactive } from 'vue';
export const signupState = reactive({
  stuId: '',
  password1: '',
  password2: '',
});
export const SignInRules = {
  stuid: [
    {
      required: true,
      message: "Please input your's studentId",
      whitespace: true,
      trigger: 'blur',
    },
    { min: 10, max: 12, message: 'Length should be 10 to 12', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: "Please input your's password",
      whitespace: true,
      trigger: 'blur',
    },
  ],
};

let text2 = "Two inputs don't match!";
let validatePass2 = async (_rule, value) => {
  if (value !== signupState.password1) {
    return Promise.reject(text2);
  } else {
    return Promise.resolve();
  }
};

let text1 = 'Password strength is weak';
let validatePass1 = async (_rule, value) => {
  let passwordreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,18}$/;
  if (!passwordreg.test(value)) {
    return Promise.reject(text1);
  } else {
    return Promise.resolve();
  }
};
export const SignUpRules = {
  stuId: [
    {
      required: true,
      message: "Please input your's studentId",
      whitespace: true,
      trigger: 'blur',
    },
    { min: 10, max: 12, message: 'Length should be 10 to 12', trigger: 'blur' },
  ],
  password1: [
    {
      required: true,
      message: "Please input your's password",
      whitespace: true,
      trigger: 'blur',
    },
    { min: 6, max: 18, message: 'Length should be 6 to 18', trigger: 'blur' },
    {
      validator: validatePass1,
      trigger: ['change', 'blur'],
    },
  ],
  password2: [
    {
      required: true,
      message: "Please input your's password",
      whitespace: true,
      trigger: 'blur',
    },
    {
      validator: validatePass2,
      trigger: ['change', 'blur'],
    },
  ],
};
