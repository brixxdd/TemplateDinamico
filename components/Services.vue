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
        <!-- Itera sobre las categorías -->
        <div v-for="category in serviceCategories" :key="category.categoryTitle" class="py-5" :style="styles.container(category.categoryTitle)">
            <h1 class="text-center">{{ category.categoryTitle }}</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5 py-5 px-1">
                <Card v-for="service in category.services" :key="service.title" :service="service" />
            </div>
        </div>
    </div>
</template>

<style scope src="@/assets/styles/Services.css"></style>
