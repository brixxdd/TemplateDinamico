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
          title: '¡Aplicaciones robustas y escalables con Java!',
          description: 'Especialistas en el desarrollo de aplicaciones empresariales y multiplataforma con alto rendimiento, utilizando uno de los lenguajes más populares del mundo.',
        },
        {
          imageSrc: '/imagen2.jpg',
          title: '¡Interfaz moderna con JavaScript!',
          description: 'Creamos experiencias de usuario dinámicas y modernas. Ideal para sitios web interactivos, landing pages, y aplicaciones web responsivas.',
        },
        {
          imageSrc: '/imagen3.jpg',
          title: '¡Impulsa tu idea en el ecosistema Apple con Swift!',
          description: 'Desarrollamos aplicaciones para iPhone y iPad, asegurando un rendimiento óptimo y una integración perfecta con todo el ecosistema de Apple.',
        },
        {
          imageSrc: '/imagen4.jpg',
          title: '¡Desarrollo nativo Android con Kotlin!',
          description: 'Transforma tus ideas en aplicaciones Android poderosas, con un lenguaje moderno y eficiente que es el futuro del desarrollo móvil.',
        },
      ],
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
  background: #eee;
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