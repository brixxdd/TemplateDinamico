<template>
  <div class="card">
    <img :src="imageSrc" alt="Image" class="card-image" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a class="card-button" :href="link">Saber más</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    }
  },
  computed: {
    imageSrc() {
      return `/images/${this.imageName}`;
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
  transition: transform 0.3s;
  background: #fff;
}
.card:hover {
  transform: translateY(-5px);
}
.card-image {
  max-width: 100%; /* Asegura que la imagen no exceda el ancho de la tarjeta */
  height: auto; /* Mantiene la relación de aspecto */
  max-height: 200px; /* Establece una altura máxima para las imágenes */
  object-fit: cover; /* Cubre el área sin distorsionar la imagen */
}
.card-content {
  padding: 15px;
  text-align: center;
}
.card-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.card-button:hover {
  background-color: #0056b3;
}
</style>
