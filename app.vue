<template>
  <div>
    <Header />
    <section id="inicio">
      <!-- Contenido para la sección de Inicio -->
      <video autoplay loop muted>
        <source src="/Hermoso paisaje en el mar(video corto).mp4" type="video/mp4">
        Tu navegador no soporta el formato de video.
      </video>
    </section>
    <section id="quienes-somos">
      <!-- Contenido para la sección de ¿Quiénes somos? -->
      <video autoplay loop muted>
        <source src="/Hermoso paisaje en el mar(video corto).mp4" type="video/mp4">
        Tu navegador no soporta el formato de video.
      </video>
    </section>
    <section id="la-plataforma">
      <!-- Contenido para la sección de La plataforma -->
    </section>
    <section id="contacto">
      <!-- Contenido para la sección de Contacto -->
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
/* Estilos adicionales para cada sección */
section {
  padding: 50px;
  min-height: 100vh; /* Altura mínima de cada sección */
}
video {
  width: 100%; /* Ajusta el tamaño del video según sea necesario */
  height: auto;
}
</style>
