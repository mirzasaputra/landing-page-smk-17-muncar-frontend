import { defineConfig } from "vite";
import path from 'path'

export default defineConfig({
    server: {
        port: 3000
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})