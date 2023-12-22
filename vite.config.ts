import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@/assets': resolve(__dirname, './src/assets'),
            '@/components': resolve(__dirname, './src/components'),
            '@/routes': resolve(__dirname, './src/routes'),
            '@/pages': resolve(__dirname, './src/pages'),
            '@/constants': resolve(__dirname, './src/toolbox/constants'),
            '@/enums': resolve(__dirname, './src/toolbox/enums'),
            '@/icons': resolve(__dirname, './src/toolbox/assets/icons'),
            '@/images': resolve(__dirname, './src/toolbox/assets/images'),
            '@/interfaces': resolve(__dirname, './src/toolbox/interfaces'),
            '@/toolbox': resolve(__dirname, './src/toolbox'),
        },
    },
    server: {
        port: 3000,
    },
})
