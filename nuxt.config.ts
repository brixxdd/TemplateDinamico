// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  app: {
    head: {
      link: [
<<<<<<< HEAD
        // Añade FontAwesome usando la etiqueta <link>
=======
        // Añadir FontAwesome usando la etiqueta <link>
>>>>>>> parent of b6d75ae (Resolver conflictos en nuxt.config.ts)
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
      script: [
<<<<<<< HEAD
=======
        // Añadir Bootstrap script
>>>>>>> parent of b6d75ae (Resolver conflictos en nuxt.config.ts)
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
          defer: true,
        },
<<<<<<< HEAD
      ],
    },
=======
      ]
    }
>>>>>>> parent of b6d75ae (Resolver conflictos en nuxt.config.ts)
  },
  build: {
    transpile: [
      // Añadir aquí cualquier otra librería que quieras transpilar
    ]
  }
})
