<script setup>
import Card from './Card.vue'; // Importa el componente Card
import { ref, onMounted } from 'vue';
import colors from '@/public/data/colors.json';

const services = ref([]); // Aquí almacenaremos los servicios

const loadServices = async () => {
    try {
        const response = await fetch('/data/servicesData.json');
        const data = await response.json();
        services.value = data.balconeriaServices; // Accede directamente a los servicios de balconería
    } catch (error) {
        console.error('Error loading services:', error);
    }
};

onMounted(() => {
    loadServices();
});
</script>

<template>
    <div class="container-principal animate-on-scroll">
        <div class="py-5">
            <h1 class="text-center">Nuestros Servicios de Balconería</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5 py-5 px-1">
                <!-- Itera sobre los servicios -->
                <Card v-for="service in services" :key="service.title" :service="service" />
            </div>
        </div>
    </div>
</template>

<style scope src="@/assets/styles/Services.css"></style>