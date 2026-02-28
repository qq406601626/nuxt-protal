// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ignore: [
    'app/pages/**/components/**' // 明确指定忽略 pages 下组件文件夹里的 vue 文件
  ],
  // routeRules: {
  //   '/api/**': {
  //     proxy: 'http://192.168.9.147:8897/stage-api/**'
  //   }
  // }
})
