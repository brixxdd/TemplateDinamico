// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  build: {
    transpile: [
      // Añadir aquí cualquier otra librería que quieras transpilar
    ]
  }
})
