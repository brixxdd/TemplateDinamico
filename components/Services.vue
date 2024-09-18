<script setup>
import Card from './Card.vue'; // Importa el componente Card
import { ref, onMounted } from 'vue';
import colors from '~/assets/styles/colors.json';

const frontEndServices = ref([]);
const backEndServices = ref([]);

const loadServices = async () => {
    try {
        const response = await fetch('/myservices/servicesData.json');
        const data = await response.json();
        frontEndServices.value = data.frontEndServices;
        backEndServices.value = data.backEndServices;
    } catch (error) {
        console.error('Error loading services:', error);
    }
};

onMounted(() => {
    loadServices();
});


const styles = {
      containerFront: {
        background: colors.services["container-front-backgroundColor"],
      },
      containerBack: {
        background: colors.services["container-back-backgroundColor"],
      },
}
</script>

<template>
    
    <div class="container-principal">
        <!-- Sección Frontend -->
  
        <div class="container-front py-5" :style="styles.containerFront">
            <h1 class="text-center">Servicios Frontend</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5 py-5 px-1">
                <Card v-for="service in frontEndServices" :key="service.title" :service="service" />
            </div>
        </div>
        
        <!-- Sección Backend -->
        <div class="container-back py-5" :style="styles.containerBack">
            <h1 class="text-center">Servicios Backend</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5 py-5 px-1">
                <Card v-for="service in backEndServices" :key="service.title" :service="service" />
            </div>
        </div>
      
    </div>
</template>

<style scoped>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');
    .container-principal{
        font-family: "Playpen Sans", cursive;
    }

   
</style>