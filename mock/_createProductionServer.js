import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
// 获取当前所有的js
const modules = import.meta.globEager('./**/*.js');

const mockModules = [];

Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default);
});

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
