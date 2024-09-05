<script setup>
    import { ref } from 'vue'

    const form = ref({
        nombre: '',
        apPaterno: '',
        apMaterno: '',
        email: '',
        telefono: '',
        mensaje: ''
    })

    const submitForm = () => {
    console.log('Formulario enviado:', form.value)
    //Lógica para enviar el formulario a un servidor
    }
</script>

<template>
    <div class="contact-container">
        <div class="contact-info">
            <h2>Coctactanos</h2>
            <h3>¿Comó podemos ayudarte?</h3>
            <p>¿Necesitas hablar con nosotros?</p>
            <p>Tapachula, Chiapas 30700</p>
            <p>+52 (962) 234-5678</p>
            <p>pilines.oficial@example.com</p>
        </div>
        
    
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="nombre">Nombre(s)</label>
        <input type="text" id="nombre" v-model="form.nombre" required />
      </div>
      <div class="form-group">
        <label for="apPaterno">Apellido paterno</label>
        <input type="text" id="apPaterno" v-model="form.apPaterno" required />
      </div>
      <div class="form-group">
        <label for="apMaterno">Apellido materno</label>
        <input type="text" id="apMaterno" v-model="form.apMaterno" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="telefono">Numero de telefono</label>
        <input type="tel" id="telefono" v-model="form.telefono" required />
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" v-model="form.mensaje" required></textarea>
      </div>
      <button type="submit">
        Enviar
        <img src="/3.png" alt="Enviar" class="btn-icon">
        </button>
    </form>
  </div>
</template>



<style scoped>
    .contact-container {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 150, 136, 0.7);
    color: #f0f0f0;
    padding: 20px;
    border-radius: none;
    border: none;
    }

    .contact-info h2{
        text-align: left;
        color: #ddedff;
        margin-bottom: 10rem;
    }

    .contact-info {
    color: #545454;
    width: 40%;
    text-align: left;
    }

    .contact-form {
    width: 55%;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
    display: block;
    margin-bottom: 5px;
    }

    input, textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #fafafa;
    border-radius: 10px;
    background-color: #ffffff;
    color: #252424;
    transition: border-color 0.3s ease;
    }
    
    input:focus, textarea:focus {
        border-color: #4e51fa;
        outline: none;
        background-color: #d3d2d2;
    }

    input:hover, textarea:hover {
        border-color: #4e51fa; /* Color del borde al pasar el mouse */
    }

    button {
    padding: 10px 25px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    }

    button:hover {
    background-color: #0056b3;
    }

    .btn-icon {
        width: 40px; /* Ajusta el tamaño de la imagen según tus necesidades */
        height: 40px;
        margin-left: 8px; /* Espacio entre la imagen y el texto */
    }
    
</style>