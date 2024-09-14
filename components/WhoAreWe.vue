<template>
    <div class="whoarewe-container" :style="{ backgroundColor: styleConfig.header.backgroundColor }">
      <div class="image-section">
        <img src="@/assets/Compu2.png" alt="Laptop Image" />
      </div>
      <div class="content-section">
        <h1 class="section-title">¿Quiénes somos?</h1>
        <p class="section-description">
          Nos especializamos en el desarrollo de software eficiente, accesible y de alta calidad.
          Crear soluciones tecnológicas innovadoras que transformen la experiencia del usuario.
        </p>
        <div class="features">
          <div class="feature">
            <i class="fas fa-cogs social-icon" style="color: #4d1bc9;"></i>
            <h2>Desarrollo a la medida</h2>
            <p>Creamos soluciones adaptadas a tus necesidades específicas con tecnología de vanguardia.</p>
          </div>
          <div class="feature">
            <i class="fas fa-tools social-icon" style="color: #25d366;"></i>
            <h2>Soporte constante</h2>
            <p>Te acompañamos en cada paso del proceso con un equipo listo para resolver cualquier duda o desafío.</p>
          </div>
          <div class="feature">
            <i class="fas fa-chart-line social-icon" style="color: #c13584;"></i>
            <h2>Mejora continua</h2>
            <p>Innovamos continuamente para brindarte productos más eficientes y optimizados cada día.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WhoAreWe',
    data() {
      return {
        styleConfig: {
          header: {
            backgroundColor: "rgb(245, 115, 19)",  // Color de fondo de la sección
          }
        }
      };
    }
  };
  </script>
  
  <style scoped>
  /* Fuente importada de Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap');
  
  /* Contenedor principal */
  .whoarewe-container {
    padding: 60px 2%;  /* Aumentar el padding para hacer el fondo más grande */
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;  /* Asegura que el background se ajuste bien */
  }
  
  /* Sección de la imagen */
  .image-section {
    text-align: center;  /* Centrar la imagen */
    margin-bottom: 20px;  /* Reducir la distancia entre la imagen y el título */
  }
  
  .image-section img {
    max-width: 40%;  /* Imagen más pequeña (40% del contenedor) */
    height: auto;     /* Mantener la proporción de la imagen */
    display: block;
    margin: 0 auto;   /* Asegurar que la imagen esté centrada */
  }
  
  /* Contenido general */
  .content-section {
    text-align: center;
    color: white;
    max-width: 900px;
    margin: 0 auto;
  }
  
  /* Título con la fuente Playpen Sans */
  .section-title {
    font-family: 'Playpen Sans', sans-serif;
    font-size: 2.2rem;  /* Reducir un poco el tamaño del título para pantallas más pequeñas */
    font-weight: 800;   /* Peso de la fuente */
    margin-bottom: 10px;  /* Reducir la distancia entre el título y la descripción */
  }
  
  /* Descripción con la fuente Playpen Sans */
  .section-description {
    font-family: 'Playpen Sans', sans-serif;
    font-size: 1.1rem;
    margin-bottom: 20px;  /* Reducir la distancia entre la descripción y las características */
    color: #d1d1d1;
    font-weight: 400;
  }
  
  /* Características en diseño flex */
  .features {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;  /* Permitir que los elementos se envuelvan en pantallas pequeñas */
    gap: 20px;
  }
  
  /* Cada característica */
  .feature {
    flex: 1 1 250px;
    max-width: 300px;  /* Limitar el ancho máximo */
    text-align: center;
  }
  
  /* Títulos de las características */
  .feature h2 {
    font-family: 'Playpen Sans', sans-serif;
    font-size: 1.2rem;
    margin-top: 10px;
    color: white;
    font-weight: 700;
  }
  
  /* Texto de las características */
  .feature p {
    font-family: 'Playpen Sans', sans-serif;
    font-size: 0.9rem;
    color: #d1d1d1;
    font-weight: 400;
  }
  
  /* Iconos */
  .social-icon {
    font-size: 2rem;
    transition: transform 0.3s, color 0.3s;
  }
  
  .social-icon:hover {
    transform: scale(1.15);
    filter: brightness(1.2);
  }
  
  /* Estilos responsivos para pantallas pequeñas */
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;  /* Reducir el tamaño del título */
    }
  
    .section-description {
      font-size: 1rem;  /* Reducir el tamaño del texto */
    }
  
    .feature h2 {
      font-size: 1.1rem;  /* Ajustar el tamaño de los títulos en características */
    }
  
    .feature p {
      font-size: 0.85rem;  /* Ajustar el tamaño del texto en características */
    }
  
    .social-icon {
      font-size: 1.8rem;  /* Ajustar el tamaño de los íconos */
    }
  }
  
  @media (max-width: 576px) {
    .features {
      flex-direction: column;  /* Cambiar a una columna para pantallas muy pequeñas */
      align-items: center;
    }
  
    .social-icon {
      font-size: 1.5rem;  /* Reducir el tamaño de los íconos en móviles */
    }
  
    .feature {
      max-width: 100%;  /* Asegurar que las características ocupen todo el ancho disponible */
    }
  
    .image-section img {
      max-width: 60%;  /* Aumentar el tamaño de la imagen en pantallas pequeñas */
    }
  }
  </style>
  