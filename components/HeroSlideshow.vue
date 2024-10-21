<template>
  <div v-if="isLoading" class="pre-swiper d-flex flex-column justify-content-center align-items-center fs-1">
  <!-- Muestra un spinner o algo mientras se cargan los datos -->
      <p>Cargando slides...</p>
  </div>
  <swiper v-else
    :effect="currentEffect"
    :grabCursor="true"
    :cubeEffect="{ slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }"
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :autoplay="{
      delay: autoplayDelay,
      disableOnInteraction: false,
      waitForTransition: false
    }"
    :modules="modules"
    class="mySwiper"
  >
  <h2>{{ currentEffect }}</h2>
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      :data-swiper-autoplay="slide.delay"
    >
      <div class="slide-content">
        <template v-if="slide.imageSrc">
          <img class="slide-image" :src="slide.imageSrc" alt="Imagen del slide" />
        </template>
        <template v-else-if="slide.videoSrc">
          <video class="slide-video" :src="slide.videoSrc" autoplay muted loop></video>
        </template>
        <div class="slide-caption">
          <h2 class="slide-title">{{ slide.title }}</h2>
          <p class="slide-description">{{ slide.description }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import { EffectCube, EffectFade, EffectFlip, Autoplay } from 'swiper/modules';
import axios from 'axios';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  beforeMount() {
    // Cargamos el archivo JSON cuando el componente se monta
    this.loadSlides();
  },
  data() {
    return {
      slides: [],
      autoplayDelay: 0, // Se inicializa a 0, se llenará con el JSON
      currentEffect: '', // Se inicializa vacía, se llenará con el JSON
      modules: [Autoplay,EffectCube, EffectFade, EffectFlip],
      isLoading: true,  // Indica que los datos aún no se han cargado
    };
  },
  methods: {
    async loadSlides() {
    try {
      //const response = await fetch('/data/heroSlideshow.json');
      const response = await axios.get('/data/heroSlideshow.json');
      //const data = response.json();
      const data = response.data;

      this.slides = data.slides;
      this.autoplayDelay = data.autoplayDelay || 0;
      //console.log(this.autoplayDelay)

      // Determina cuál efecto está activado
      if (data.effect.cube) {
        this.currentEffect = 'cube';
      } else if (data.effect.fade) {
        this.currentEffect = 'fade';
      } else if (data.effect.flip) {
        this.currentEffect = 'flip';
      }
      console.log(this.currentEffect);
      this.isLoading = false; // La carga ha terminado
    } catch (error) {
      console.error('Error loading heroSlideshow.json:', error);
      this.isLoading = false; // Manejo de errores
    }
  },
  }
};
</script>

<style scoped>
  
  /* Estilos generales */
  body {
    font-family: 'Playpen Sans', sans-serif; /* Aplicamos la nueva fuente aquí */
  }
  
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
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  .pre-swiper{
      width: 100%;     /* Ocupa todo el ancho del contenedor */
    height: 100%;    /* Ocupa todo el alto del contenedor */
    object-fit: cover; /* Escala y recorta la imagen si es necesario, para llenar el contenedor */
    z-index: 1;
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

  .slide-video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
}
  
  .slide-caption {
    position: absolute;
    top: 50%;               /* Mueve el texto al centro verticalmente */
    left: 50%;              /* Centra el texto horizontalmente */
    transform: translate(-50%, -50%); /* Ajusta la posición para centrarlo completamente */
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    z-index: 2;
    width: 80%;             /* Ajusta el ancho si es necesario */
    max-width: 800px;       /* Limita el ancho para pantallas grandes */
  }
  
  .slide-title {
    font-family: 'Playpen Sans', sans-serif; /* Aplicar la fuente específica al título */
    font-size: 2rem; /* Tamaño del título */
    font-weight: 800; /* Peso de la fuente */
    margin: 0; /* Eliminar márgenes para mantener consistencia */
  }
  
  .slide-description {
    font-family: 'Playpen Sans', sans-serif; /* Aplicar la fuente específica a la descripción */
    font-size: 1rem; /* Tamaño de la descripción */
    margin: 0; /* Eliminar márgenes para mantener consistencia */
    color: #ffffff; /* Color de la descripción */
  }
</style>
