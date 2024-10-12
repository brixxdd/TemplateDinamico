<template>
  <div class="whoarewe-container">
    <div class="image-content-wrapper animate-on-scroll">
      <div class="image-section">
        <img src="/Compu2.png" alt="Laptop Image" />
      </div>
      <div class="content-section">
        <h1 class="section-title">Nosotros!!</h1>
        <p class="section-description">{{ data.description }}</p>
      </div>
    </div>
    <div class="features">
      <div v-for="(feature, index) in data.features" :key="index" class="feature animate-on-scroll">
        <i :class="feature.icon" class="social-icon" :style="{ color: feature.iconColor }"></i>
        <div class="feature-text">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/public/data/WhoAreWe.json';

export default {
  name: 'WhoAreWe',
  data() {
    return {
      data,
    };
  }
};
</script>
<style>
@import '@/assets/styles/WhoAreWe.css';

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Ajusta estos estilos según tus preferencias */
.whoarewe-container {
  overflow: hidden;
}

.image-content-wrapper {
  transition-delay: 0.2s;
}

.feature {
  transition-delay: 0.1s;
}

.feature:nth-child(2) {
  transition-delay: 0.2s;
}

.feature:nth-child(3) {
  transition-delay: 0.3s;
}

/* Asegura que la transición se aplique en ambas direcciones */
.animate-on-scroll,
.animate-on-scroll.is-visible {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Puedes añadir más estilos específicos aquí si es necesario */
</style>