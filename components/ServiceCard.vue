<template>
    <div class="col">
      <div class="card">
        <!-- Usa la propiedad de imagen del objeto service -->
        <img :src="`/images/${service.image}`" class="card-img-top" alt="Imagen del servicio">
        <div class="card-body" v-if="ver">
          <h5 class="card-title">{{ service.title }}</h5>
          <hr>
          
          <!-- Mostrar el párrafo solo si la variable ver es true -->
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
  
  <script setup>
  import { ref } from 'vue';
  
  // Definición de las propiedades
  defineProps({
    service: {
      type: Object,
      required: true
    }
  });
  
  // Estado local para controlar la visibilidad de la descripción
  const ver = ref(false);
  
  // Función para alternar la visibilidad de la descripción con un pequeño retraso
  const verDesc = () => {
    if (!ver.value) {
      setTimeout(() => {
        ver.value = true;
      }, 150); // Retraso de 150ms antes de mostrar la descripción
    } else {
      ver.value = false;
    }
  };
  </script>
  
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
  
  /* Estilos responsivos */
  @media (max-width: 600px) {
      .card-img-top {
          height: 200px; /* Ajustar la altura de la imagen en pantallas pequeñas */
      }
  
      .card {
          margin: 10px; /* Ajustar el margen para pantallas pequeñas */
      }
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
  