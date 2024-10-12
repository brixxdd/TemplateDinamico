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
    imageSrc: '/imagen1.jpg',
    title: "Descubre el Aprendizaje en Línea",
    description: "¡Explora un mundo de aprendizaje en línea! Adquiere nuevas habilidades desde la comodidad de tu hogar.",
  },
  {
    imageSrc: '/imagen2.jpg',
    title: "Conocimiento al Alcance de un Clic",
    description: "Con nuestros cursos en línea, el conocimiento está al alcance de un clic. ¡Empieza tu aventura educativa hoy!",
  },
  {
    imageSrc: '/imagen3.jpg',
    title:  "Aprende a tu Ritmo",
    description: "Aprende a tu ritmo y conviértete en un experto en temas que te apasionan, ¡todo a través de nuestra plataforma en línea!",
  },
  {
    imageSrc: '/imagen4.jpg',
    title:  "Aprendizaje Innovador",
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
  width: 90%;     /* Ocupa todo el ancho del contenedor */
  height: 90%;    /* Ocupa todo el alto del contenedor */
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