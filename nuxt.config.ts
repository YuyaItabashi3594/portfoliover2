// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content",'@vueuse/nuxt','@nuxtjs/device'],
  app: {
    baseURL: '',
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "nemunyan's room",
      meta: [
        {name: "nemunyan's room", content: "nemunyanのポートフォリオサイトです。"},
      ]
    },
  },
  content: {
    highlight :{
      theme: 'github-dark'
    }
  },
  vite: {
    server: {
      hmr: {
        port: 3008,
      },
      watch: {
        usePolling: true,
      },
    },
  },
  generate: {
  }
});
