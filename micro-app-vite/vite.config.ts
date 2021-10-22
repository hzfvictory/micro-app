import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const pathResolve = (dir: string): any => {
  // @ts-ignore
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "@": pathResolve("src")
};

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  base: `${process.env.NODE_ENV === "production" ? "线上地址" : ""}/mic-vite/`, // VITE_BASE_URL
  resolve: {
    alias
  },
  server: {
    port: 9004,
    open: true,
    proxy: { // 代理配置
      "/dev": "https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/"
    }
  },
  plugins: [
    vue(),
    // @ts-ignore
    (function() {
      let basePath = "";
      return {
        name: "micro-app-vite",
        apply: "build", // 只在生产环境生效
        configResolved(config) {
          // 获取资源地址前缀
          basePath = `${config.base}${config.build.assetsDir}/`;
        },
        renderChunk(code, chunk) {
          // build后，import会通过相对地址引入模块，需要将其补全
          if (chunk.fileName.endsWith(".js") && /(from|import)(\s*['"])(\.\.?\/)/g.test(code)) {
            code = code.replace(/(from|import)(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
              return all.replace($3, new URL($3, basePath));
            });
          }
          return code;
        }
      };
    })()
  ]
});
