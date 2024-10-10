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
        <video class="slide-video" autoplay loop muted playsinline>
          <source :src="slide.videoSrc" type="video/mp4">
          Tu navegador no soporta el formato de video.
        </video>
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
          videoSrc: '/Video1.mp4',
          title: '¡Aplicaciones robustas y escalables con Java!',
          description: 'Especialistas en el desarrollo de aplicaciones empresariales y multiplataforma con alto rendimiento, utilizando uno de los lenguajes más populares del mundo.',
        },
        {
          videoSrc: '/Video2.mp4',
          title: '¡Interfaz moderna con JavaScript!',
          description: 'Creamos experiencias de usuario dinámicas y modernas. Ideal para sitios web interactivos, landing pages, y aplicaciones web responsivas.',
        },
        {
          videoSrc: '/Video3.mp4',
          title: '¡Impulsa tu idea en el ecosistema Apple con Swift!',
          description: 'Desarrollamos aplicaciones para iPhone y iPad, asegurando un rendimiento óptimo y una integración perfecta con todo el ecosistema de Apple.',
        },
        {
          videoSrc: '/Video4.mp4',
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
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.slide-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
}
</style>