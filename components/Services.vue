<script setup>
import Card from './Card.vue'; // Importa el componente Card
import { ref, onMounted } from 'vue';
import colors from '@/public/data/colors.json';

const serviceCategories = ref([]);

const loadServices = async () => {
    try {
        const response = await fetch('/data/servicesData.json');
        const data = await response.json();
        serviceCategories.value = data.categories;
    } catch (error) {
        console.error('Error loading services:', error);
    }
};

onMounted(() => {
    loadServices();
});

const styles = {
    container: (categoryTitle) => {
        return {
            background: colors.services[categoryTitle]?.backgroundColor || '#ffffff',
        };
    },
};
</script>

<template>
    <div class="container-principal animate-on-scroll">
        <div v-for="category in serviceCategories" :key="category.categoryTitle" class="category-container py-5" :style="styles.container(category.categoryTitle)">
            <h1 class="text-center category-title">{{ category.categoryTitle }}</h1>
            <div class="card-grid">
                <Card v-for="service in category.services" :key="service.title" :service="service" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-principal {
  padding: 20px;
}

.category-container {
  margin: 30px 0;
}

.category-title {
  font-size: 2em; /* Aumentar el tamaño del título de la categoría */
  margin-bottom: 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Tarjetas en cuadrícula con un mínimo de 250px */
  gap: 15px; /* Espacio entre tarjetas */
}

/* Estilos adicionales para las tarjetas */
.card {
  transition: transform 0.3s, box-shadow 0.3s; /* Transición suave */
}

.card:hover {
  transform: scale(1.05); /* Aumentar ligeramente el tamaño al pasar el mouse */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Sombra más intensa al pasar el mouse */
}
</style>
