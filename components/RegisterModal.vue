<template>
  <transition name="modal">
    <div v-if="show" class="modal-overlay" @click="closeModal">
      <div class="modal-wrapper" @click.stop>
        <div class="modal-content" :style="modalStyle">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
            <button type="button" class="btn-close" @click="closeModal" :style="closeButtonStyle" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleSubmit">
              <!-- El contenido del formulario permanece igual -->
              <div class="mb-3">
                <label for="fullName" class="form-label">Nombre Completo</label>
                <input type="text" class="form-control" id="fullName" v-model="form.fullName" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="email" v-model="form.email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" v-model="form.password" required>
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label">Sexo</label>
                <select class="form-control" id="gender" v-model="form.gender" required>
                  <option value="">Selecciona una opción</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Teléfono</label>
                <input type="tel" class="form-control" id="phone" v-model="form.phone" required>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="terms" v-model="form.terms" required>
                <label class="form-check-label" for="terms">He leído y acepto los términos y condiciones</label>
              </div>
              <button type="submit" class="btn btn-primary">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        password: '',
        gender: '',
        phone: '',
        terms: false,
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },
    handleSubmit() {
      // Aquí puedes manejar el envío del formulario
      console.log(this.form);
      this.closeModal();
    },
  },
  computed: {
    modalStyle() {
      return {
        zIndex: 1050,
      };
    },
    closeButtonStyle() {
      return {
        zIndex: 1051,
      };
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-wrapper {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  max-width: 500px;
  width: 90%;
}

.modal-content {
  padding: 20px;
}

/* Animaciones para el modal */
.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-to, .modal-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>