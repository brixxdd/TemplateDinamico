<template>
  <div>
    <Header :isScrolled="isScrolled" />
    <section id="inicio">
      <!-- Contenido para la sección de Inicio -->
      <video autoplay loop muted>
        <source src="/costa-rica.mp4" type="video/mp4">
        Tu navegador no soporta el formato de video.
      </video>
    </section>
    <section id="quienes-somos">
      <!-- Contenido para la sección de ¿Quiénes somos? -->
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
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  components: {
    Header,
    Footer
  },
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrolled
    };
  }
};
</script>

<style scoped>
section {
  padding: 0;
  min-height: 100vh;
  margin: 0;
}

video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>
