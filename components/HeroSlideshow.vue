<template>
  <swiper
    :effect="'cube'"
    :cubeEffect="{ slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }"
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="slide-content">
        <!-- Cambié el video por imágenes -->
        <img class="slide-image" :src="slide.imageSrc" alt="Imagen del slide" />
        <div class="slide-caption">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { EffectCube, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCube, Autoplay],
      slides: [
  {
    imageSrc: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "Descubre el Aprendizaje en Línea",
        description: "¡Explora un mundo de aprendizaje en línea! Adquiere nuevas habilidades desde la comodidad de tu hogar.",
   
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1605711285791-0219e80e43a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "Conocimiento al Alcance de un Clic",
        description: "Con nuestros cursos en línea, el conocimiento está al alcance de un clic. ¡Empieza tu aventura educativa hoy!",
  },
  {
    imageSrc: 'https://plus.unsplash.com/premium_photo-1664285864903-8f7daf0eb3a9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "Aprende a tu Ritmo",
        description: "Aprende a tu ritmo y conviértete en un experto en temas que te apasionan, ¡todo a través de nuestra plataforma en línea!",
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "Aprendizaje Innovador",
        description: "¡Conéctate con un aprendizaje innovador! Desarrolla tus habilidades y prepárate para el futuro desde casa.",
  },
]

    };
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: hsl(180, 66%, 49%);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;  /* Ocupa todo el ancho del contenedor */
  height: 100%; /* Ocupa todo el alto del contenedor */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;     /* Ocupa todo el ancho del contenedor */
  height: 100%;    /* Ocupa todo el alto del contenedor */
  object-fit: cover; /* Escala y recorta la imagen si es necesario, para llenar el contenedor */
  z-index: 1;
}

.slide-caption {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  z-index: 2;
}

</style>