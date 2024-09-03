<template>
  <header>
    <nav>
      <div class="logo">Los Pilines</div>
      <div class="nav-links">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
          <li><a href="#la-plataforma">La plataforma</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <button class="btn-register">Regístrate</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #009688;
  color: #fff;
  padding: 20px;
  width: 100%; /* Asegura que el header ocupe todo el ancho de la pantalla */
  box-sizing: border-box; /* Incluye el padding en el tamaño total del header */
  position: fixed; /* Mantiene el header fijo en la parte superior */
  top: 0;
  left: 0;
  z-index: 1000; /* Asegura que el header esté por encima de otros elementos */
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Limita el ancho máximo del contenido */
  margin: 0 auto; /* Centra el contenido dentro del header */
  width: 100%;
}


.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 10px;
}

li a {
  background-color: #009688;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

li a:hover {
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
  margin-left: 10px;
}

.btn-register:hover {
  background-color: #00796b;
}

/* Ajuste para que el contenido no quede oculto bajo el header fijo */
body {
  padding-top: 80px; /* Ajusta el padding según la altura del header */
}
</style>
