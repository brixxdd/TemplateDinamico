<template>
  <div>
    <Header :isScrolled="isScrolled" />
    <section id="inicio" class="bg-dark text-white text-center d-flex align-items-center justify-content-center">
      <!-- Contenido para la sección de Inicio -->
      <video autoplay loop muted class="w-100 h-100 object-fit-cover">
        <source src="/costa rica.mp4" type="video/mp4">
        Tu navegador no soporta el formato de video.
      </video>
      <div class="overlay">
        <h1 class="display-4">Bienvenido a Nuestra Página</h1>
        <p class="lead">Explora nuestra plataforma y aprende más sobre nosotros.</p>
        <a href="#quienes-somos" class="btn btn-primary btn-lg">Conoce más</a>
      </div>
    </section>
    <section id="quienes-somos" class="py-5 bg-light">
      <!-- Contenido para la sección de ¿Quiénes somos? -->
      <div class="container">
        <h2 class="text-center mb-4">¿Quiénes Somos?</h2>
        <p class="text-center">Aquí va una breve descripción sobre nosotros.</p>
      </div>
    </section>
    <section id="la-plataforma" class="py-5">
      <!-- Contenido para la sección de La plataforma -->
      <div class="container">
        <h2 class="text-center mb-4">La Plataforma</h2>
        <p class="text-center">Información sobre la plataforma.</p>
      </div>
    </section>
    <section id="contacto" class="py-5 bg-light">
      <!-- Contenido para la sección de Contacto -->
      <div class="container">
        <h2 class="text-center mb-4">Contacto</h2>
        <form>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" class="form-control" id="name" placeholder="Tu nombre">
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="Tu correo electrónico">
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea class="form-control" id="message" rows="3" placeholder="Tu mensaje"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
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
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>
