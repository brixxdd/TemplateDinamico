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
      
      <section id="nuestros-servicios" class="services-section">
        <h2>Nuestros Servicios</h2>
        <div class="services-grid">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :service="service"
          />
        </div>
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
import ServiceCard from '@/components/ServiceCard.vue';
import './assets/styles/global.css'; 

export default {
  components: {
    Header,
    Footer,
    HeroSlideshow,
    WhoAreWe,
    RegisterModal,
    ContactZone,
    ServiceCard
  },
  setup() {
    const isScrolled = ref(false);
    const showModal = ref(false);
    const services = ref([]);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50; 
    };

    const loadServices = async () => {
      try {
        const response = await fetch('/data/services.json');
        services.value = await response.json().then(data => data.services);
      } catch (error) {
        console.error("Error loading services:", error);
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      loadServices();
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrolled,
      showModal,
      services,
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

/* Estilo de la nueva sección */
.services-section {
  background-color: #ffffff;
  padding: 50px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.contact-zone {
  background-color: #f1f1f1;
}
</style>
