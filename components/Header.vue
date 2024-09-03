<template>
  <header :class="{ transparent: !isScrolled, scrolled: isScrolled }">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Los Pilines</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#quienes-somos">¿Quiénes somos?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#la-plataforma">La plataforma</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
        <div class="ml-auto">
          <button class="btn btn-register">Regístrate</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isScrolled: Boolean
  }
};
</script>

<style scoped>
header {
  background-color: rgba(0, 150, 136, 0.8); /* Color de fondo semitransparente */
  color: #fff;
  padding: 1px;
  width: 100%; /* Asegura que el header ocupe todo el ancho de la pantalla */
  box-sizing: border-box; /* Incluye el padding en el tamaño total del header */
  position: fixed; /* Mantiene el header fijo en la parte superior */
  top: 0;
  left: 0;
  z-index: 1000; /* Asegura que el header esté por encima de otros elementos */
  transition: background-color 0.3s; /* Suaviza la transición de color */
}

header.transparent {
  background-color: rgba(0, 150, 136, 0); /* Hacer el header completamente transparente */
}

header.scrolled {
  background-color: #009688; /* Cambia el color cuando se ha desplazado */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Limita el ancho máximo del contenido */
  margin: 0 auto; /* Centra el contenido dentro del header */
  width: 100%;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  margin-right: auto; /* Alinea el título a la izquierda */
}

.navbar-nav {
  display: flex;
  flex-direction: row;
  margin-left: auto; /* Empuja los elementos del menú a la derecha */
}

.nav-item {
  margin-left: 20px; /* Espacio entre los elementos del menú */
}

.nav-link {
  background-color: #009688;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #00796b;
}

.btn-register {
  background-color: #009688;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 20px; /* Espacio a la izquierda del botón de registro */
}

.btn-register:hover {
  background-color: #00796b;
}

/* Ajuste para que el contenido no quede oculto bajo el header fijo */
body {
  padding-top: 80px; /* Ajusta el padding según la altura del header */
}
</style>
