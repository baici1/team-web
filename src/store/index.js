import { createStore } from "vuex";
// 知识点1： 可用于模块的批量导入，类同于import引入同一文件夹下多个文件。
// 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块，
const modulesFiles = import.meta.globEager("./modules/*.js");
// 知识点2：reduce(()=> {total, currentValue, currentIndex, arr}, initValue)
// 参数： 1. 执行每条数据的函数 2. 传递给函数的初始值，可选（以前没发现初始值的妙用-可用于统计个数、去重等）
// 函数的参数
// 1. total 必需。初始值, 或者计算结束后的返回值。如果设置初始值就用初始值，否则就是函数的第一条数据
// 2. currentValue 必需。当前元素
const modules = Object.entries(modulesFiles).reduce((modules, [path, mod]) => {
  const moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, "$1");
  modules[moduleName] = mod["default"];
  return modules;
}, {});

export default createStore({
  modules
});
