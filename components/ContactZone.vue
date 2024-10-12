<script setup>
import { ref, computed, onMounted } from 'vue';
import { alertaExito, showAlertEmail } from '@/utils/alertas';
import colors from '@/public/data/colors.json';
import contacto from '@/public/data/contacto.json';

const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
});

const limpiarDatos = () => {
  form.value.nombre = '';
  form.value.email = '';
  form.value.telefono = '';
  form.value.mensaje = '';
};

const loading = ref(false);
const emailInput = ref(null);

const isEmailValid = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(form.value.email);
});

const focusEmailInput = () => {
  if (emailInput.value) {
    emailInput.value.focus();
  }
};

const submitForm = () => {
  if (!isEmailValid.value) {
    showAlertEmail();
    focusEmailInput();
    return;
  }

  loading.value = true;
  setTimeout(() => {
    console.log('Formulario enviado:', form.value);
    limpiarDatos();
    loading.value = false;
    alertaExito();
  }, 2000);
};

onMounted(() => {
  const root = document.documentElement;
  root.style.setProperty('--text-principal-color', colors.zoneContact['textPrincipal']);
});
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="contact-info">
          <h2>{{contacto.tittle}}</h2>
          <h3>{{contacto.subtitulo}}</h3>
          <p>{{ contacto.p1 }}</p>
          <p><i class="fa-solid fa-map-pin"></i> {{contacto.direccion}}</p>
          <p><i class="fa-solid fa-phone-volume"></i> {{contacto.celphone}}</p>
          <p><i class="fa-solid fa-at"></i> {{ contacto.correo }}</p>
        </div>
      </div>
      <div class="col-md-6">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" id="nombre" v-model="form.nombre" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="form.email" ref="emailInput" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="telefono" class="form-label">Número de teléfono</label>
            <input type="tel" id="telefono" v-model="form.telefono" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="mensaje" class="form-label">Mensaje</label>
            <textarea id="mensaje" v-model="form.mensaje" class="form-control" required></textarea>
          </div>
          <div class="d-flex justify-content-center">
            <button v-if="!loading" type="submit" class="btn btn-primary">Enviar</button>
            <div v-else class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: "Playpen Sans", cursive;
  min-height: 100vh;
}

.contact-info {
  background: white;
  color: var(--text-principal-color);
  padding: 20px;
  border-radius: 8px;
}

.contact-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.btn-primary {
  background-color: var(--text-principal-color);
  border: none;
  color: white;
  padding: 10px 20px;
}

.spinner-border {
  color: var(--text-principal-color);
}

@media (max-width: 768px) {
  .contact-info, .contact-form {
    width: 100%;
  }
}
</style>
