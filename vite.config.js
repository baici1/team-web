import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// mock插件
import { viteMockServe } from 'vite-plugin-mock';
// 处理icon
import viteSvgIcons from 'vite-plugin-svg-icons';
// 导入elementui
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default (env) => {
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
      }),
      viteSvgIcons({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(__dirname, './src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // 忽略以下划线`_`开头的文件
        ignore: /^_/,
        // 设置模拟.ts 文件的存储文件夹
        mockPath: 'mock',
        // 设置是否监视mockPath对应的文件夹内文件中的更改
        watchFiles: true,
        // 开发环境是否开启mock功能（可以在package.json的启动命令中指定mode为mock）
        localEnabled: env.command === 'serve',
        // 生产环境是否开启mock功能
        prodEnabled: true,
        supportTs: false,
        // 如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。
        injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer';
        setupProdMockServer();
      `,
      }),
    ],
    resolve: {
      // 设置@的代表的位置
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};
