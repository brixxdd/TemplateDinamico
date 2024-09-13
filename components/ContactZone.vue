<script setup>
    import { ref, computed, onMounted } from 'vue'
    import { alertaExito, showAlertEmail} from '@/utils/alertas'
    import colors from '~/assets/styles/colors.json';

    const form = ref({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    })


    const limpiarDatos = () => {
      form.value.nombre = ''
      form.value.email = ''
      form.value.telefono = ''
      form.value.mensaje = ''
    }

    const loading = ref(false) // Estado de carga
    const emailInput = ref(null);//ref para campo email

    // Computed para verificar si el email es válido
    const isEmailValid = computed(() => {
      const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      console.log(form.value.email)
      console.log(emailRegex.test(form.value.email))
      return emailRegex.test(form.value.email)
    })

    const focusEmailInput = () => {
      if (emailInput.value) {
        emailInput.value.focus();
      }
    };



    const submitForm = () => {
      console.log('Verificando formulario')
      //verificar email
      if (!isEmailValid.value) {
        showAlertEmail()
        focusEmailInput()
        return 
      }

      loading.value = true; // Mostrar el spinner
      setTimeout(() => {
        console.log('Formulario enviado:', form.value)
        // Aquí puedes agregar la lógica para enviar los datos al servidor
        limpiarDatos()
        loading.value = false; // Ocultar el spinner después de 2 segundos
        // Llamar a la alerta de éxito
        alertaExito();
      }, 2000); // Espera de 2 segundos
      
    }

    

    onMounted(() => {
      const root = document.documentElement

      // Definir variables CSS para la zona de contacto
      root.style.setProperty('--contact-container-gradient1', colors.zoneContact['contact-container-backgroundColor-gradient1'])
      root.style.setProperty('--contact-container-gradient2', colors.zoneContact['contact-container-backgroundColor-gradient2'])
      root.style.setProperty('--contact-info-background-color', colors.zoneContact['contact-info-backgroundColor'])
      root.style.setProperty('--text-principal-color', colors.zoneContact['textPrincipal'])
      root.style.setProperty('--text-principal-border', colors.zoneContact['textPrincipal-borde'])
      root.style.setProperty('--text-p', colors.zoneContact['texto-p'])
      root.style.setProperty('--gradient1', colors.zoneContact['gradient1'])
      root.style.setProperty('--gradient2', colors.zoneContact['gradient2'])
      root.style.setProperty('--button', colors.zoneContact['button'])
    })
</script>

<template>
    <div class="contact-container">
      <div class="contact-info">
        <div class="textPrincipal">
          <h2>Contactanos</h2>
          <h3>¿Comó podemos ayudarte?</h3>
          <p>¿Necesitas hablar con nosotros?</p>
          <p class="paragraph-with-icon">
            <i class="fa-solid fa-map-pin"></i>
            Tapachula, Chiapas 30700
          </p>
          <p class="paragraph-with-icon">
            <i class="fa-solid fa-phone-volume"></i>
            +52 (962) 234-5678
          </p>
          <p class="paragraph-with-icon">
            <i class="fa-solid fa-at"></i>
            devpilots.oficial@example.com
          </p>
        </div>
      </div>
        
      <div class="textFormulario">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <div class="input-with-icon">
              <i class="fa-solid fa-user-astronaut"></i>
              <input type="text" id="nombre" v-model="form.nombre" required />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <div class="input-with-icon">
              <i class="fa-solid fa-envelope"></i>
              <input  id="email" v-model="form.email" ref="emailInput"  required/>
            </div>
          </div> 
          <div class="form-group">
            <label for="telefono">Numero de telefono</label>
            <div class="input-with-icon">
              <i class="fa-solid fa-square-phone-flip"></i>
              <input type="tel" id="telefono" v-model="form.telefono" required />
            </div>
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje</label>
            <div class="input-with-icon">
              <i class="fa-regular fa-comment"></i>
              <textarea id="mensaje" v-model="form.mensaje" required></textarea>
            </div>
          </div>
          <div class="button">
            <button type="submit" v-if="!loading">
                Enviar
                <i class="fa-solid fa-paper-plane btn-icon"></i>
              <!-- <img src="/3.png" alt="Enviar" class="btn-icon"> -->
            </button>
            <div class="buttonv">
              <div class="spinner" v-if="loading">
                  <spinner />
              </div>
            </div>
          </div>
        </form>
      </div>
  </div>
</template>



<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

    .contact-container {
      height: auto;
      width: 100%;
      display: flex;
      align-items: center;
      *background: linear-gradient(var(--gradient1), var(--gradient2)), url(/public/3.png);
      background: linear-gradient(rgba(8, 8, 8, 0.7),rgba(16, 7, 103, 0.5)),url(/public/binario.jpg);
      font-family: "Playpen Sans", cursive;
    }

    .contact-info{
      margin-left: 9rem;
      display: flex;
      background-color: var(--contact-info-background-color);
      border-radius: 10px;
    }
    
    .textPrincipal{
      max-width: 600px;
      background-color: transparent;
      text-align: center;
      border-radius: 10px;
      margin: 1rem;
      opacity: 0.8;
      border: 2px solid var(--text-principal-border);
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
    /*button {
      padding: 10px 25px;
      border: none;
      font-size: 16px;
      border-radius: 50px;
      margin: 40px;
      background: var(--button);
      color: #fff;
      cursor: pointer;
      box-shadow: 1px 1px 30px -12px #2f0bf7;
      transition: all 300ms;
    }

    button:hover {
      background-color: #0056b3;
      box-shadow: 1px 1px 30px -6px #2f0bf7;
      opacity: 0.8;
    }*/

    .contact-info h2{
      font-size: 40px;
      font-weight: 600;
      color: var(--text-p);
    }

    .contact-info h3{
      color: var(--text-p);
    }

    .contact-info p{
      font-size: 20px;
      margin-top: 40px;
      color: var(--text-p);
    }

    .textFormulario{
      width: 600px;
      height: auto;
      display: flex;
      align-items: center;
      margin-left: 12rem;
    }
    
    .contact-form {
      background-color: var(--contact-info-background-color);
      width: 100%;
      height: auto;     
      border-radius: 10px;      
    }

    .form-group {
      margin-left: 40px;
      margin-bottom: 15px;
      margin: 2rem;
    }

    label {
      display: block;
      margin-bottom: 5px;
      margin-left: 35px;
      color: #ffffff;
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
    /* Agregando icon */
    .input-with-icon {
      display: flex;
      align-items: center;
      position: relative;
    }

    .input-with-icon input {
      padding-right: 30px; /* Espacio para que el ícono no se sobreponga al texto */
      flex: 1; /* Ocupa todo el espacio disponible */
    }

    .input-with-icon i {
      position: absolute;
      right: 10px; /* Ajusta según tu preferencia */
      color: #717172;
      pointer-events: none; /* Evita que el ícono interfiera con el clic en el input */
    }

    .paragraph-with-icon{
      text-align: left;
      margin-left: 2rem;
    }

    .paragraph-with-icon i {
      color: var(--text-p); /* Color del ícono */
      margin-right: 15px;
    }

    /*termina icons */

    .button{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-icon {
        margin-left: 8px; /* Espacio entre la imagen y el texto */
    }

    .spinner {
      border-radius: 40px;
      color: var(--text-p); /* Color del spinner */
      display: flex;
      align-items: center;
      justify-content: center;
    }


    .error-message {
      background-color: #be0707; /* Fondo rojo */
      color: #ffffff; /* Letras blancas */
      padding: 10px; /* Espaciado interno */
      border-radius: 5px; /* Bordes redondeados */
      font-size: 0.8rem; /* Tamaño de letra más pequeño */
      margin-top: 5px; /* Espaciado superior */
      text-align: center; /* Centrar el texto */
      width: fit-content; /* Ajustar el ancho al contenido */
      
    }
    /*------------------------------------------------------
    aqui lo responsive*/
    @media (min-width: 1199px) and (max-width: 1300px) {
      .contact-info p{
        font-size: 15px;
      }
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        .contact-container {
            flex-direction: column; /* Alinea la estructura en columna */
            background-size: cover; /* Asegura que la imagen de fondo cubra bien la pantalla */
            padding: 20px;
        }

        .contact-info {
            margin-left: 0;
            margin-bottom: 2rem;
            max-width: 90%; /* Reduce el ancho para evitar desbordamientos */
            text-align: center;
        }

        .textPrincipal h2 {
            font-size: 32px; /* Reduce el tamaño del título */
        }

        .textPrincipal p {
            font-size: 18px; /* Ajusta el tamaño del texto descriptivo */
            margin-top: 20px; /* Reduce el margen superior */
            
        }

        .textFormulario {
            width: 90%; /* Ajusta el ancho del formulario para pantallas más pequeñas */
            margin-left: 0;
        }

        .contact-form {
            padding: 20px;
            border-radius: 8px; /* Ajusta los bordes redondeados */
        }

        .form-group {
            margin-left: 0;
            margin-bottom: 10px; /* Reduce el espacio entre los campos */
        }

        label {
            font-size: 14px; /* Reduce el tamaño de las etiquetas */
            margin-left: 0;
        }

        input, textarea {
            font-size: 14px; /* Disminuye el tamaño de los inputs */
            padding: 8px; /* Ajusta el padding para inputs más compactos */
        }

        .button {
            margin: 20px;
        }

        button {
            font-size: 14px; /* Reduce el tamaño del botón */
            padding: 8px 20px;
        }

        .error-message {
            font-size: 0.75rem; /* Ajusta el tamaño del mensaje de error */
        }

        
        .input-with-icon i {
          position: absolute;
          right: 10px; /* Ajusta según tu preferencia */
          color: #717172;
          pointer-events: none; /* Evita que el ícono interfiera con el clic en el input */
        }
    }
    @media (min-width: 767.1px) and (max-width: 1024px) {
        /* Estilos para tablets */
        .contact-container {
            flex-direction: column; /* Alinea los elementos en columna para más espacio vertical */
            padding: 15px;
            background-size: cover; /* Asegura que el fondo se vea completo */
        }

        .contact-info {
            margin: 0 auto;
            max-width: 85%; /* Reduce el ancho para evitar desbordamientos laterales */
            text-align: center; /* Centra el contenido en la pantalla */
            padding: 20px;
        }

        .textPrincipal h2 {
            font-size: 28px; /* Reduce el tamaño de los títulos */
            margin-bottom: 15px;
        }

        .textPrincipal p {
            font-size: 16px; /* Ajusta el tamaño de los párrafos para mejor legibilidad */
            margin-top: 15px;
            
        }

        .textFormulario {
            width: 85%; /* Reduce el ancho del formulario */
            margin: 0 auto; /* Centra el formulario */
        }

        .contact-form {
            padding: 15px; /* Ajusta el padding para que el formulario no ocupe mucho espacio */
            border-radius: 8px; /* Suaviza los bordes */
        }

        .form-group {
            margin-bottom: 10px; /* Reduce el espacio entre los campos */
        }

        label {
            font-size: 14px; /* Tamaño más pequeño para las etiquetas */
            margin-left: 5px;
        }

        input, textarea {
            font-size: 13px; /* Ajusta el tamaño de los inputs y textareas */
            padding: 8px; /* Menos espacio para inputs compactos */
        }

        .input-with-icon {
            padding-right: 25px; /* Reduce el espacio derecho en los inputs con iconos */     
                    
        }

        button {
            font-size: 14px; /* Reduce el tamaño de los botones */
            padding: 10px 25px; /* Ajusta el padding para adaptarse a pantallas más pequeñas */
        }

        .btn-icon {
            margin-left: 5px; /* Reduce el espacio entre el ícono y el texto en el botón */
        }

        .error-message {
            font-size: 0.75rem; /* Reduce el tamaño del mensaje de error */
            padding: 8px;
        }
        .input-with-icon i {
          right: 35px;
        }
    }
    @media (max-width: 767px) {
    /* Estilos para teléfonos grandes o phablets */
    .contact-container {
        flex-direction: column;
        padding: 10px;
        background-size: cover; /* Asegura que el fondo ocupe toda la pantalla */
    }

    .contact-info {
        margin: 0 auto;
        max-width: 95%; /* Usa casi todo el ancho disponible */
        padding: 15px;
        text-align: center; /* Centra el texto para mejor lectura */
    }

    .textPrincipal h2 {
        font-size: 24px; /* Tamaño reducido para el título */
        margin-bottom: 10px;
    }

    .textPrincipal p {
        font-size: 14px; /* Texto más pequeño y conciso */
        margin-top: 10px;
        text-align: center;
    }

    .textFormulario {
        width: 95%; /* Asegura que el formulario ocupe casi todo el ancho de la pantalla */
        margin: 0 auto;
    }

    .contact-form {
        padding: 10px; /* Reduce el padding para un mejor ajuste en pantallas pequeñas */
        border-radius: 6px;
    }

    .form-group {
        margin-bottom: 10px;
    }

    label {
        font-size: 12px; /* Texto más pequeño en las etiquetas */
        margin-left: 0;
    }

    input, textarea {
        font-size: 12px; /* Ajuste del tamaño del texto en los campos */
        padding: 8px; /* Padding compacto */
    }

    .input-with-icon {
        padding-right: 20px; /* Ajusta el espacio para los íconos */
    }

    .input-with-icon i {
        right: 40px; /* Coloca el ícono más cerca del borde */
    }

    button {
        font-size: 12px; /* Tamaño más pequeño del texto en el botón */
        padding: 10px 50px; /* Ajusta el tamaño de los botones */
        margin: 20px; /* Reduce el margen para que no ocupe demasiado espacio */
    }

    .btn-icon {
        margin-left: 4px; /* Reduce la distancia entre el ícono y el texto */
    }

    .error-message {
        font-size: 0.7rem; /* Tamaño más pequeño para el mensaje de error */
        padding: 6px; /* Espaciado compacto */
    }

    /* Ajuste de los íconos en los párrafos */
    .paragraph-with-icon {
        font-size: 14px;
        text-align: left;
        margin-left: 10px; /* Menor margen para los íconos */
    }

    .paragraph-with-icon i {
        margin-right: 10px; /* Ajuste del espacio del ícono */
    }

    /* Spinner más compacto */
    .spinner {
        width: 35px;
        height: 35px;
        margin: 0 auto;
    }
}
@media (max-width: 480px) {
    /* Estilos para pantallas pequeñas */

    .contact-container {
        flex-direction: column;
        padding: 5px;
        background-size: cover; /* Asegura que el fondo cubra todo el ancho */
    }

    .contact-info, .textFormulario {
        width: 100%; /* Ocupa todo el ancho disponible */
        margin: 0; /* Elimina márgenes laterales */
        padding: 10px; /* Agrega un padding pequeño para que no se pegue a los bordes */
    }

    .contact-info {
        text-align: center;
        padding: 15px; /* Padding ajustado */
    }
    .textPrincipal{
      width: 100%;
    }
    .textPrincipal h2 {
        font-size: 20px; /* Tamaño reducido para el título */
        margin-bottom: 8px;
    }

    .textPrincipal p {
        font-size: 12px; /* Texto más pequeño y conciso */
        margin-top: 5px;
        text-align: center;
    }

    .textFormulario {
        width: 100%; /* Asegura que el formulario ocupe todo el ancho */
        margin-top: 20px; /* Añade un pequeño margen superior para separar las secciones */
    }

    .contact-form {
        width: 100%; /* Ocupa el 100% del contenedor */
        padding: 10px; /* Padding reducido */
        border-radius: 6px; /* Redondeado más pequeño */
    }

    .form-group {
        margin-bottom: 10px;
        padding: 0 10px; /* Añade padding para un mejor ajuste en pantallas pequeñas */
    }

    label {
        font-size: 11px; /* Texto más pequeño para las etiquetas */
    }

    input, textarea {
        font-size: 11px; /* Tamaño de texto reducido */
        padding: 6px; /* Padding compacto */
    }

    .input-with-icon input {
        padding-right: 15px; /* Ajuste para espacio de íconos */
    }

    .input-with-icon i {
        right: 0px; /* Coloca el ícono más cerca del borde */
        color: var(--text-p);
    }

    button {
        font-size: 11px; /* Tamaño más pequeño del texto */
        padding: 7px 15px; /* Ajusta el tamaño del botón */
        margin: 20px 0; /* Menor margen para mejor adaptación */
        width: 60%; /* Botón más ancho pero con espacio lateral */
    }

    .btn-icon {
        margin-left: 4px; /* Distancia reducida entre el texto y el ícono */
    }

    .error-message {
        font-size: 0.7rem; /* Tamaño más pequeño del mensaje de error */
        padding: 5px; /* Ajusta el padding */
    }

    .paragraph-with-icon {
        font-size: 12px; /* Texto más pequeño */
        margin-left: 0;
        text-align: center; /* Alineación centrada */
    }

    .paragraph-with-icon i {
        margin-right: 5px; /* Ajuste del ícono */
        
    }

    .spinner {
        width: 30px;
        height: 30px;
        margin: 0 auto;
    }
}


</style>