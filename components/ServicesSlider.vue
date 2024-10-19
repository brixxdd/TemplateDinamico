<template>
    <swiper
      :slides-per-view="3"
      space-between="30"
      navigation
      pagination="{ clickable: true }"
      autoplay="{ delay: 3000 }"
      loop
    >
      <swiper-slide>
        <ServiceCard 
          title="Desarrollo Web" 
          description="Aplicaciones web personalizadas con Vue.js." 
          :image="image1" 
          link="/servicios/web-development" 
        />
      </swiper-slide>
      <swiper-slide>
        <ServiceCard 
          title="Desarrollo Móvil" 
          description="Aplicaciones móviles nativas y multiplataforma." 
          :image="image2" 
          link="/servicios/mobile-development" 
        />
      </swiper-slide>
      <swiper-slide>
        <ServiceCard 
          title="SEO y Marketing" 
          description="Optimización para motores de búsqueda y estrategias de marketing." 
          :image="image3" 
          link="/servicios/seo-marketing" 
        />
      </swiper-slide>
      <swiper-slide>
        <ServiceCard 
          title="E-commerce" 
          description="Soluciones completas para tiendas en línea." 
          :image="image4" 
          link="/servicios/e-commerce" 
        />
      </swiper-slide>
    </swiper>
  </template>
  
  <script setup>
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import ServiceCard from '@/components/ServiceCard.vue';
  
  // Importar imágenes
  const image1 = require('@/assets/images/imagen1.png');
  const image2 = require('@/assets/images/imagen2.jpg');
  const image3 = require('@/assets/images/imagen3.jpg');
  const image4 = require('@/assets/images/imagen4.jpg');
  </script>
  