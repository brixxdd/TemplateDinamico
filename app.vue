<template>
  <div>
    <Header :isScrolled="isScrolled" @open-register-modal="showModal = true" />
    <RegisterModal :show="showModal" @update:show="showModal = false" />
    <section id="inicio"
      class="bg-dark text-white text-center d-flex align-items-center justify-content-center position-relative"
      style="height: 100vh;">
      <!-- Contenido para la sección de Inicio -->
      <HeroSlideshow />
    </section>
    <section id="quienes-somos" class="py-5 bg-light">
      <!-- Contenido para la sección de ¿Quiénes somos? -->
      <WhoAreWe />
    </section>
    <section id="la-plataforma" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">La Plataforma</h2>
        <p class="text-center">Información sobre la plataforma.</p>
      </div>
    </section>
    
    <!-- Añade el componente ContactZone aquí -->
    <ContactZone />
    
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import HeroSlideshow from '@/components/HeroSlideshow.vue';
import RegisterModal from '@/components/RegisterModal.vue'; // Asegúrate de importar tu modal aquí
import WhoAreWe from '@/components/WhoAreWe.vue';
import ContactZone from '@/components/ContactZone.vue'; // Importa ContactZone

export default {
  components: {
    Header,
    Footer,
    HeroSlideshow,
    WhoAreWe,
    RegisterModal, // Registro del modal
    ContactZone, // Registra el componente aquí
  },
  setup() {
    const isScrolled = ref(false);
    const showModal = ref(false);

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
      isScrolled,
      showModal,
    };
  },
};
</script>

<style scoped>
/* Estilos globales o específicos para app.vue */
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 3;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
