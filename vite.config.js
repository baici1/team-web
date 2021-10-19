import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
//处理icon
import viteSvgIcons from "vite-plugin-svg-icons";
import ViteComponents, {
  AntDesignVueResolver,
  ElementPlusResolver,
} from "vite-plugin-components";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver(), ElementPlusResolver()],
    }),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(__dirname, "./src/assets/svg")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    //设置@的代表的位置
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
