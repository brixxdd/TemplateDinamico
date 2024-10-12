<script setup>
import { ref } from 'vue';
import colors from '@/public/data/colors.json';

defineProps({
  service: {
    type: Object,
    required: true
  }
});


const ver = ref(false);

/*const verDesc = () => {
  ver.value = !ver.value;
};*/



const verDesc = () => {
  if (!ver.value) {
    setTimeout(() => {
      ver.value = true;
    }, 150);
  } else {
    ver.value = false;
  }
};

onMounted(() => {
      const root = document.documentElement

      // Definir variables
      root.style.setProperty('--card-box-shadow', colors.card['card-box-shadow'])
      root.style.setProperty('--btn-primary-hover-backgroundColor', colors.card['btn-primary-hover-backgroundColor'])
})

</script>

<template>
  <div class="col">
    <div class="card">
      <img :src="`/myservices/imgServices/${service.image}`" class="card-img-top" alt="...">
      <div class="card-body" v-if="ver">
        <h5 class="card-title">{{ service.title }}</h5>
        <hr>
        
        <!-- Mostrar el párrafo solo si showDescription es true -->
        <p class="cardText">{{ service.description }}</p>
      </div>

      <div class="d-flex justify-content-around wb-5">
        <!-- Botón para alternar la visibilidad del párrafo -->
        <button class="btn btn-primary my-3" @click="verDesc">
          {{ ver ? 'Ocultar' : 'Ver' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
    border-radius: 50px;
    padding: 20px;
    object-fit: cover; 
    height: 350px; 
}

.card {
    border-radius: 30px;
    box-shadow: var(--card-box-shadow);
    max-height: 100%;
    
}

.card-body {
    padding: 25px;
    margin-top: -15px;
}

.btn-primary {
    border-radius: 50px;
    width: 120px;
    border: none;
}

.btn-primary:hover {
    background-color: var(--btn-primary-hover-backgroundColor);
}

.card-text {
  transition: 0.7s ease-in-out;
}

</style>
