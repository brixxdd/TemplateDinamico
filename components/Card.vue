<script setup>
import { ref } from 'vue';

// Definir las propiedades para recibir los datos del servicio
defineProps({
  service: {
    type: Object,
    required: true
  }
});

// Estado para controlar la visibilidad de la descripción
const ver = ref(false);

// Función para alternar la visibilidad de la descripción
const verDesc = () => {
  ver.value = !ver.value;
};
</script>

<template>
  <div class="col">
    <div class="card">
      <!-- Imagen del servicio -->
      <img :src="`/myservices/imgServices/${service.image}`" class="card-img-top" alt="Imagen del servicio">

      <!-- Título del servicio (siempre visible) -->
      <div class="card-body">
        <h5 class="card-title">{{ service.title }}</h5>
        <hr>
        
        <!-- Descripción (mostrar solo si `ver` es true) -->
        <p v-if="ver" class="card-text">{{ service.description }}</p>
      </div>

      <!-- Botón para alternar la visibilidad de la descripción -->
      <div class="d-flex justify-content-around wb-5">
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
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
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
  background-color: #0056b3;
}
</style>
