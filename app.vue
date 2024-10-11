<template>
  <div class="app-container">
    <Header :isScrolled="isScrolled" @open-register-modal="showModal = true" />
    <RegisterModal :show="showModal" @update:show="showModal = false" />
    <main>
      <section id="inicio" class="hero-section">
        <HeroSlideshow />
      </section>
      <section id="quienes-somos" class="who-are-we-section">
        <WhoAreWe />
      </section>    
      <section id="contacto" class="contact-zone">
        <ContactZone />
    </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import HeroSlideshow from '@/components/HeroSlideshow.vue';
import RegisterModal from '@/components/RegisterModal.vue';
import WhoAreWe from '@/components/WhoAreWe.vue';
import ContactZone from '@/components/ContactZone.vue';
import './assets/styles/global.css'; // Asegúrate que la ruta sea correcta


export default {
  components: {
    Header,
    Footer,
    HeroSlideshow,
    WhoAreWe,
    RegisterModal,
    ContactZone,
  },
  setup() {
    const isScrolled = ref(false);
    const showModal = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50; // Cambia de color cuando haces scroll más de 50px
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
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.hero-section {
  height: 100vh; /* Mantiene la altura completa de la ventana */
}

.who-are-we-section {
  background-color: #f8f9fa; /* O el color que prefieras */
}
</style>
