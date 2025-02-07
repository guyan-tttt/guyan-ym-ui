import {  defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { readdirSync } from 'fs'
import { filter ,map, delay} from 'lodash-es'
import shelljs from 'shelljs'
import hooksPlugin from './hooksPlugin'
import terser from '@rollup/plugin-terser'


const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";


const MOVE_STYLE_DELUCTION = 800
// 移动css文件
function moveStyle() {
    try{
        // 在能读取到css之后将umd的css文件复制到根目录，用于后续全量引入
        readdirSync("./dist/es/theme")
        shelljs.mv("./dist/es/theme","./dist/theme")
    }catch(e) {
        console.log(e);
        
        delay(moveStyle,MOVE_STYLE_DELUCTION)
    }

}

// 读取组件名称
function getDirectoriesSync(basePath: string) {
    const entries = readdirSync(basePath,{ withFileTypes: true });
    return map(
        filter(entries,(entry) => entry.isDirectory()),
        (entry) => entry.name
    )
}

export default defineConfig({
    plugins:[
        vue(),
        dts({
        tsconfigPath: '../../tsconfig.build.json',
        outDir: "dist/types"
        }),
        hooksPlugin({
            rmFiles:['./dist/es', './dist/theme','./dist/types'],
            afterBuild:moveStyle
        }),
        terser({
            compress: {
              sequences: isProd, // 保留逗号
              arguments: isProd, // 保留函数参数
              drop_console: isProd && ["log"], // 移除console
              drop_debugger: false, // 移除debugger
              passes: isProd ? 4 : 1, // 压缩次数
              global_defs: {
                "@DEV": JSON.stringify(isDev),
                "@PROD": JSON.stringify(isProd),
                "@TEST": JSON.stringify(isTest),
              },
            },
            format: {
              semicolons: false,
              shorthand: isProd,
              braces: !isProd,
              beautify: !isProd,
              comments: !isProd,
            },
            mangle: {
              toplevel: isProd,
              eval: isProd,
              keep_classnames: isDev,
              keep_fnames: isDev,
            },
          })

],
    build: {
        outDir: "dist/es",
        minify: false,
        cssCodeSplit: true, // 开启CSS代码分离,

        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: "云墨UI",
            fileName: "index",
            formats: ['es']
        },
        rollupOptions: {
            external: [
                'vue',
                "@fortawesome/fontawesome-svg-core",
                "@fortawesome/free-solid-svg-icons",
                "@fortawesome/vue-fontawesome",
                "@popperjs/core",
                "async-validator"
            ],
            output: {
                assetFileNames: (assetInfo: any) => {
                    if (assetInfo.name === 'style.css') {
                        return `index.css`
                    } 
                    if (
                        assetInfo.type === "asset" &&
                        /\.(css)$/i.test(assetInfo.name as string)
                      ) {
                        return "theme/[name].[ext]";
                      }
                      return assetInfo.name as string;
                },
                // 分包配置
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return "vendor"; // 将第三方库打包到一个名为vendor的chunk中
                    }
                    if(id.includes("/packages/hooks")) {
                        return "hooks"; // 将hooks打包到一个名为hook的chunk中
                    }
                    if(id.includes("/packages/utils")) {
                        return "utils"; // 将utils打包到一个名为utils的chunk中
                    }
                    if(id.includes("plugin-vue:export-helper")) {
                        return "utils"
                    }
                    for(const dirName of getDirectoriesSync("../components")) {
                        if(id.includes(`/packages/components/${dirName}`)) {
                            return `${dirName}`; // 将组件打包到各自名称下的chunk中
                        }
                    }
                    
                }

            }
        }
    }
})