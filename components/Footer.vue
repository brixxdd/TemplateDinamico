<template>
  <footer class="footer" :style="footerStyle">
    <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
      <i class="fa-solid fa-envelope social-icon" style="color: #ffffff;"></i>
    </a>
    <a href="https://facebook.com/tuperfil" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-facebook social-icon" style="color: #4267b2;"></i>
    </a>
    <a href="https://instagram.com/tuperfil" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-instagram social-icon" style="color: #c13584;"></i>
    </a>
    <a href="https://wa.me/9622242393" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-whatsapp social-icon" style="color: #25d366;"></i>
    </a>
    <p>
      <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">Términos y Condiciones</a> | 
      <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">Aviso de Privacidad</a>
    </p>
    
    <!-- Incluye los modales aquí -->
    <ModalTerms />
    <ModalPrivacy />
  </footer>
</template>

<script>
import colors from '~/assets/styles/colors.json';
import ModalTerms from '~/components/ModalTerms.vue';
import ModalPrivacy from '~/components/ModalPrivacy.vue';

export default {
  components: {
    ModalTerms,
    ModalPrivacy
  },
  computed: {
    footerStyle() {
      return {
        backgroundColor: colors.footer.backgroundColor,
        color: colors.footer.textColor,
      };
    },
  },
};
</script>

<style scoped>
/* Estilos globales para el footer */
html,
body {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el cuerpo ocupe al menos el alto de la pantalla */
}

.footer {
  padding: 20px; /* Aumenta el padding para mayor espacio */
  text-align: center;
  width: 100%;
  margin-top: auto; /* Empuja el footer al final del contenedor */
}

.social-icon {
  margin: 0 10px; /* Separa los íconos con un margen horizontal */
  font-size: 1.5em; /* Ajusta el tamaño de los íconos si es necesario */
  color: inherit; /* Mantiene el color actual del texto */
  transition: color 0.3s; /* Añade una transición suave al color */
}

.social-icon:hover {
  color: #007bff; /* Cambia el color al pasar el cursor, ajusta según tu preferencia */
}

/* Asegura que el footer tenga un buen espaciado en pantallas más pequeñas */
@media (max-width: 576px) {
  .footer {
    padding: 15px;
  }
}
</style>
