<template>
  <div class="container mt-5" v-scroll-observer>
    <div class="row">
      <div class="col-md-6 mb-4 animate-on-scroll">
        <div class="bg-light p-4 rounded shadow-sm contact-info">
          <h2 class="text-primary">Contáctanos</h2>
          <h3>¿Cómo podemos ayudarte?</h3>
          <p>¿Necesitas hablar con nosotros?</p>
          <p>
            <i class="fa-solid fa-map-pin"></i> Tapachula, Chiapas 30700
          </p>
          <p>
            <i class="fa-solid fa-phone-volume"></i> +52 (962) 234-5678
          </p>
          <p>
            <i class="fa-solid fa-at"></i> devpilots.oficial@example.com
          </p>
        </div>
      </div>
      <div class="col-md-6 animate-on-scroll">
        <form @submit.prevent="submitForm" class="contact-form bg-light p-4 rounded shadow-sm">
          <div class="mb-3 animate-on-scroll">
            <label for="nombre" class="form-label">Nombre</label>
            <div class="input-group">
              <span class="input-group-text"><i class="fa-solid fa-user-astronaut"></i></span>
              <input type="text" id="nombre" v-model="form.nombre" class="form-control" required />
            </div>
          </div>
          <div class="mb-3 animate-on-scroll">
            <label for="email" class="form-label">Email</label>
            <div class="input-group">
              <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
              <input type="email" id="email" v-model="form.email" ref="emailInput" class="form-control" required />
            </div>
          </div>
          <div class="mb-3 animate-on-scroll">
            <label for="telefono" class="form-label">Número de teléfono</label>
            <div class="input-group">
              <span class="input-group-text"><i class="fa-solid fa-square-phone-flip"></i></span>
              <input type="tel" id="telefono" v-model="form.telefono" class="form-control" required />
            </div>
          </div>
          <div class="mb-3 animate-on-scroll">
            <label for="mensaje" class="form-label">Mensaje</label>
            <div class="input-group">
              <span class="input-group-text"><i class="fa-regular fa-comment"></i></span>
              <textarea id="mensaje" v-model="form.mensaje" class="form-control" required></textarea>
            </div>
          </div>
          <div class="d-flex justify-content-center animate-on-scroll">
            <button type="submit" class="btn btn-primary" :disabled="loading">
              Enviar
              <i class="fa-solid fa-paper-plane btn-icon ms-2"></i>
            </button>
            <div v-if="loading" class="spinner-border ms-2" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { alertaExito, showAlertEmail } from '@/utils/alertas';

const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
});

const loading = ref(false);

const submitForm = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    alertaExito();
  }, 2000);
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.col-md-6:nth-child(1) {
  transition-delay: 0.1s;
}

.col-md-6:nth-child(2) {
  transition-delay: 0.2s;
}

.mb-3:nth-child(1) {
  transition-delay: 0.3s;
}

.mb-3:nth-child(2) {
  transition-delay: 0.4s;
}

.mb-3:nth-child(3) {
  transition-delay: 0.5s;
}

.mb-3:nth-child(4) {
  transition-delay: 0.6s;
}

.d-flex.justify-content-center {
  transition-delay: 0.7s;
}

.spinner-border {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
