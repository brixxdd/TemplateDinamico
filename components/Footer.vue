<template>
  <footer class="footer">
    <p>Mi Pie de Página</p>
  </footer>
</template>

<style scoped>
/* Estilos globales para el footer */
html, body {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el cuerpo ocupe al menos el alto de la pantalla */
}

.footer {
  background-color: #29AAA0;
  color: white;
  padding: 20px; /* Aumenta el padding para mayor espacio */
  text-align: center;
  width: 100%;
  margin-top: auto; /* Empuja el footer al final del contenedor */
}

/* Asegura que el footer tenga un buen espaciado en pantallas más pequeñas */
@media (max-width: 576px) {
  .footer {
    padding: 15px;
  }
}
</style>
