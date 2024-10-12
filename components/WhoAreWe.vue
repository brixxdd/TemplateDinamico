<template>
  <div class="whoarewe-container">
    <div class="image-content-wrapper animate-on-scroll">
      <div class="image-section">
        <img src="/television1.png" alt="Imagen de Televisión" />
      </div>
      <div class="content-section">
        <h1 class="section-title" :style="{ color: colors.titleColor }">Nosotros!!</h1>
        <p class="section-description" :style="{ color: colors.descriptionColor }">{{ data.description }}</p>
      </div>
    </div>
    <div class="features">
      <div v-for="(feature, index) in data.features" :key="index" class="feature animate-on-scroll">
        <i :class="feature.icon" class="social-icon" :style="{ color: feature.iconColor }"></i>
        <div class="feature-text">
          <h2 :style="{ color: colors.featureTitleColor }">{{ feature.title }}</h2>
          <p :style="{ color: colors.featureDescriptionColor }">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import data from '@/public/data/WhoAreWe.json';
import colors from '@/public/data/colors.json';

onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  }
});
</script>

<style scoped>
@import '@/assets/styles/WhoAreWe.css';

.whoarewe-container {
  padding: 20px;
  background-color: #87CEEB; /* Color celeste */
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
