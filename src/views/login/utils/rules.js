import { ref } from 'vue';
export const signupState = ref({
  phone: '1234567890',
  password: '123456',
  password2: '123456',
});
let text = 'Please input correct mobile phone number';
let validatePhone = async (_rule, value) => {
  const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
  if (!reg.test(value)) {
    return Promise.reject(text);
  } else {
    return Promise.resolve();
  }
};
export const SignInRules = {
  phone: [
    {
      required: true,
      message: "Please input your's phone",
      whitespace: true,
      trigger: 'blur',
    },
    { min: 10, max: 12, message: 'Length should be 10 to 12', trigger: 'blur' },
    {
      validator: validatePhone,
      trigger: ['blur'],
    },
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
  if (value !== signupState.value.password) {
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
  phone: [
    {
      required: true,
      message: "Please input your's studentId",
      whitespace: true,
      trigger: 'blur',
    },
    { min: 10, max: 12, message: 'Length should be 10 to 12', trigger: 'blur' },
    {
      validator: validatePhone,
      trigger: ['blur'],
    },
  ],
  password: [
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
