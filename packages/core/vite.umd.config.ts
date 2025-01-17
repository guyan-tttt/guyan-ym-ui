import {  defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { compression } from 'vite-plugin-compression2'
import {  readFileSync } from "fs"
import shelljs from "shelljs"
import { delay } from 'lodash-es'
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
        readFileSync("./dist/umd/index.css.gz")
        shelljs.cp("./dist/umd/index.css","./dist/index.css")
    }catch(e) {
        delay(moveStyle,MOVE_STYLE_DELUCTION)
    }
}

export default defineConfig({
    plugins:[vue(),
        compression({
        include: /.(cjs|css)$/i
        }),
        hooksPlugin({
            rmFiles: ['./dist/umd','./dist/index/css'],
            afterBuild: moveStyle,
        }),
        terser({
            compress: {
              drop_console: ["log"],
              drop_debugger: true,
              passes: 3,
              global_defs: {
                "@DEV": JSON.stringify(isDev),
                "@PROD": JSON.stringify(isProd),
                "@TEST": JSON.stringify(isTest),
              },
            },
          }),
    ],
    build: {
        outDir: "dist/umd",
        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: "云墨UI",
            fileName: "index",
            formats: ['umd']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                exports: "named",
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') {
                        return `index.css`
                    } else {
                        return assetInfo.name as string;
                    }
                }
            }
        }
    }
})