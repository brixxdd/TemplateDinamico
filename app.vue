<template>
  <div>
    <Header :isScrolled="isScrolled" @open-register-modal="showModal = true" />
    <RegisterModal :show="showModal" @update:show="showModal = false" />
    <NuxtPage/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import HeroSlideshow from '@/components/HeroSlideshow.vue';
import RegisterModal from '@/components/RegisterModal.vue'; // Asegúrate de importar tu modal aquí
import { ref, onMounted, onUnmounted } from 'vue';
import WhoAreWe from '@/components/WhoAreWe.vue';

export default {
  components: {
    Header,
    Footer,
    HeroSlideshow,
    WhoAreWe,
    RegisterModal, // Registro del modal
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
  z-index: 3; /* Asegura que el overlay se muestre por encima del video y slideshow */
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; /* Asegura que el video esté detrás del slideshow y overlay */
}
</style>