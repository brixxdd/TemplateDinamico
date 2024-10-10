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

.contact-info {
  background: linear-gradient(to right, var(--gradient1), var(--gradient2));
}

.contact-form {
  background: linear-gradient(to right, var(--gradient1), var(--gradient2));
}

.btn-icon {
  margin-left: 8px;
}

.spinner-border {
  color: var(--text-p);
}

@media (max-width: 768px) {
  .contact-info, .contact-form {
    width: 100%;
  }
}
    /* CSS */
    button {
  padding: 10px 25px;
  margin: 40px;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

button:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}

.btn-primary:hover {
  background-color: var(--button-hover);
  border-color: var(--button-hover);
}

.form-control:focus {
  border-color: var(--text-principal);
  box-shadow: 0 0 0 0.2rem rgba(var(--text-principal), 0.25);
}

.contact-form .input-group {
  margin-bottom: 1rem;
}




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
