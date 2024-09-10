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
        // Añadir FontAwesome usando la etiqueta <link>
=======
        // Añade FontAwesome usando la etiqueta <link>
>>>>>>> f079932f2496bac28e6f929b9c3f2eb54a3a4e67
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
      script: [
<<<<<<< HEAD
        // Añadir Bootstrap script
=======
>>>>>>> f079932f2496bac28e6f929b9c3f2eb54a3a4e67
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
          defer: true,
        },
<<<<<<< HEAD
      ]
    }
=======
      ],
    },
>>>>>>> f079932f2496bac28e6f929b9c3f2eb54a3a4e67
  },
  build: {
    transpile: [
      // Añadir aquí cualquier otra librería que quieras transpilar
    ],
  },
});
