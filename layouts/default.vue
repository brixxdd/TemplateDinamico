<template>
  <div>
    <Header />
    <NuxtPage />  <!-- Cambia Nuxt a NuxtPage -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
/* Tus estilos aquí */
</style>
