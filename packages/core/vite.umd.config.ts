import {  defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins:[vue()],
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