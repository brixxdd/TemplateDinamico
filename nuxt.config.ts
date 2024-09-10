// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/styles/global.css'
  ],
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
          type: 'text/javascript'
        }
      ]
    }
  },
  script: [
    // Incluye los scripts necesarios para Bootstrap
    { src: 'https://code.jquery.com/jquery-3.6.0.min.js', mode: 'client' },
    { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js', mode: 'client' },
    { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js', mode: 'client' }
  ],
  build: {
    transpile: [
      // Añadir aquí cualquier otra librería que quieras transpilar
    ]
  }
})
