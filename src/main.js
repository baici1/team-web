import { createApp } from 'vue';
import App from './App.vue';
// 引入store
import store from './store';
// 引入路由
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入svg图标注册脚本
import 'vite-plugin-svg-icons/register';
// 注册全局组件
// 使用方法   <!-- <svg-icon name="register"></svg-icon> -->
import * as Components from './global-components';
const app = createApp(App);
Object.entries(Components).forEach(([key, component]) => {
  app.component(key, component);
}); // 参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
app.use(store).use(router).use(ElementPlus).mount('#app');
