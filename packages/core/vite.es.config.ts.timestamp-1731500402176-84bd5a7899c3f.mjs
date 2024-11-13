// vite.es.config.ts
import { defineConfig } from "file:///D:/360Downloads/%E4%BA%91%E5%A2%A8UI/node_modules/.pnpm/vite@5.4.10_@types+node@20.17.6/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/360Downloads/%E4%BA%91%E5%A2%A8UI/node_modules/.pnpm/@vitejs+plugin-vue@5.1.5_vite@5.4.10_vue@3.5.12/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///D:/360Downloads/%E4%BA%91%E5%A2%A8UI/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.17.6_typescript@5.6.3_vite@5.4.10/node_modules/vite-plugin-dts/dist/index.mjs";
import { readdirSync } from "fs";
import { filter, map } from "file:///D:/360Downloads/%E4%BA%91%E5%A2%A8UI/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
var __vite_injected_original_dirname = "D:\\360Downloads\\\u4E91\u58A8UI\\packages\\core";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
var vite_es_config_default = defineConfig({
  plugins: [vue(), dts({
    tsconfigPath: "../../tsconfig.build.json",
    outDir: "dist/types"
  })],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "\u4E91\u58A8UI",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return `index.css`;
          } else {
            return assetInfo.name;
          }
        },
        // 分包配置
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils")) {
            return "utils";
          }
          for (const dirName of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return `${dirName}`;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwzNjBEb3dubG9hZHNcXFxcXHU0RTkxXHU1OEE4VUlcXFxccGFja2FnZXNcXFxcY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcMzYwRG93bmxvYWRzXFxcXFx1NEU5MVx1NThBOFVJXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LzM2MERvd25sb2Fkcy8lRTQlQkElOTElRTUlQTIlQThVSS9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgIGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcbmltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnXHJcbmltcG9ydCB7IGZpbHRlciAsbWFwfSBmcm9tICdsb2Rhc2gtZXMnXHJcblxyXG5cclxuLy8gXHU4QkZCXHU1M0Q2XHU3RUM0XHU0RUY2XHU1NDBEXHU3OUYwXHJcbmZ1bmN0aW9uIGdldERpcmVjdG9yaWVzU3luYyhiYXNlUGF0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gcmVhZGRpclN5bmMoYmFzZVBhdGgseyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xyXG4gICAgcmV0dXJuIG1hcChcclxuICAgICAgICBmaWx0ZXIoZW50cmllcywoZW50cnkpID0+IGVudHJ5LmlzRGlyZWN0b3J5KCkpLFxyXG4gICAgICAgIChlbnRyeSkgPT4gZW50cnkubmFtZVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczpbdnVlKCksZHRzKHtcclxuICAgICAgICB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uJyxcclxuICAgICAgICBvdXREaXI6IFwiZGlzdC90eXBlc1wiXHJcbiAgICB9KV0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICAgIG91dERpcjogXCJkaXN0L2VzXCIsXHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vaW5kZXgudHMnKSxcclxuICAgICAgICAgICAgbmFtZTogXCJcdTRFOTFcdTU4QThVSVwiLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxyXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICAgICAgICAgICd2dWUnLFxyXG4gICAgICAgICAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIsXHJcbiAgICAgICAgICAgICAgICBcIkBmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWVcIixcclxuICAgICAgICAgICAgICAgIFwiQHBvcHBlcmpzL2NvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiYXN5bmMtdmFsaWRhdG9yXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gJ3N0eWxlLmNzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBpbmRleC5jc3NgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gXHU1MjA2XHU1MzA1XHU5MTREXHU3RjZFXHJcbiAgICAgICAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInZlbmRvclwiOyAvLyBcdTVDMDZcdTdCMkNcdTRFMDlcdTY1QjlcdTVFOTNcdTYyNTNcdTUzMDVcdTUyMzBcdTRFMDBcdTRFMkFcdTU0MERcdTRFM0F2ZW5kb3JcdTc2ODRjaHVua1x1NEUyRFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZC5pbmNsdWRlcyhcIi9wYWNrYWdlcy9ob29rc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJob29rc1wiOyAvLyBcdTVDMDZob29rc1x1NjI1M1x1NTMwNVx1NTIzMFx1NEUwMFx1NEUyQVx1NTQwRFx1NEUzQXZlbmRvclx1NzY4NGNodW5rXHU0RTJEXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkLmluY2x1ZGVzKFwiL3BhY2thZ2VzL3V0aWxzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInV0aWxzXCI7IC8vIFx1NUMwNnV0aWxzXHU2MjUzXHU1MzA1XHU1MjMwXHU0RTAwXHU0RTJBXHU1NDBEXHU0RTNBdmVuZG9yXHU3Njg0Y2h1bmtcdTRFMkRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBkaXJOYW1lIG9mIGdldERpcmVjdG9yaWVzU3luYyhcIi4uL2NvbXBvbmVudHNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQuaW5jbHVkZXMoYC9wYWNrYWdlcy9jb21wb25lbnRzLyR7ZGlyTmFtZX1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2Rpck5hbWV9YDsgLy8gXHU1QzA2XHU3RUM0XHU0RUY2XHU2MjUzXHU1MzA1XHU1MjMwXHU1NDA0XHU4MUVBXHU1NDBEXHU3OUYwXHU0RTBCXHU3Njg0Y2h1bmtcdTRFMkRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VCxTQUFVLG9CQUFvQjtBQUN0VixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixTQUFTLG1CQUFtQjtBQUM1QixTQUFTLFFBQVEsV0FBVTtBQUwzQixJQUFNLG1DQUFtQztBQVN6QyxTQUFTLG1CQUFtQixVQUFrQjtBQUMxQyxRQUFNLFVBQVUsWUFBWSxVQUFTLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFDNUQsU0FBTztBQUFBLElBQ0gsT0FBTyxTQUFRLENBQUMsVUFBVSxNQUFNLFlBQVksQ0FBQztBQUFBLElBQzdDLENBQUMsVUFBVSxNQUFNO0FBQUEsRUFDckI7QUFDSjtBQUVBLElBQU8seUJBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVEsQ0FBQyxJQUFJLEdBQUUsSUFBSTtBQUFBLElBQ2YsY0FBYztBQUFBLElBQ2QsUUFBUTtBQUFBLEVBQ1osQ0FBQyxDQUFDO0FBQUEsRUFDRixPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDRCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDbEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVU7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDSixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzNCLGNBQUksVUFBVSxTQUFTLGFBQWE7QUFDaEMsbUJBQU87QUFBQSxVQUNYLE9BQU87QUFDSCxtQkFBTyxVQUFVO0FBQUEsVUFDckI7QUFBQSxRQUNKO0FBQUE7QUFBQSxRQUVBLGFBQWEsSUFBSTtBQUNiLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUM3QixtQkFBTztBQUFBLFVBQ1g7QUFDQSxjQUFHLEdBQUcsU0FBUyxpQkFBaUIsR0FBRztBQUMvQixtQkFBTztBQUFBLFVBQ1g7QUFDQSxjQUFHLEdBQUcsU0FBUyxpQkFBaUIsR0FBRztBQUMvQixtQkFBTztBQUFBLFVBQ1g7QUFFQSxxQkFBVSxXQUFXLG1CQUFtQixlQUFlLEdBQUc7QUFDdEQsZ0JBQUcsR0FBRyxTQUFTLHdCQUF3QixPQUFPLEVBQUUsR0FBRztBQUMvQyxxQkFBTyxHQUFHLE9BQU87QUFBQSxZQUNyQjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFFSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
