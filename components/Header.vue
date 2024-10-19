<template>
  <header :class="{ transparent: !isScrolled, scrolled: isScrolled }" :style="headerStyle">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="https://plus.unsplash.com/premium_photo-1674571895797-3ca2aaf89eed?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" class="logo" />
        Educación que se adapta a ti
      </a>
      <!-- Botón de menú (hamburguesa) visible solo en pantallas pequeñas -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Elementos del menú -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto"> <!-- Menú alineado a la derecha en pantallas grandes -->
          <li class="nav-item">
            <a class="nav-link" href="#inicio"><span>Inicio</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#quienes-somos"><span>Nosotros</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#servicios"><span>Servicios</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto"><span>Contacto</span></a>
          </li>          
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import colors from '@/public/data/colors.json';

export default {
  props: {
    isScrolled: Boolean
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: this.isScrolled ? colors.header.scrolledBackgroundColor : colors.header.backgroundColor,
      };
    }
  }
};
</script>

<style scoped>
/* Estilos del header */
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  color: #ffffff;
  transition: background-color 0.3s;
}

/* Clase dinámica cuando se ha hecho scroll */
header.transparent {
  background-color: transparent;
}

header.scrolled {
  background-color: #0D47A1; /* Un azul oscuro más intenso */
}

/* Estilos del navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #D3D3D3; /* Amarillo brillante */
  display: flex;
  align-items: center; /* Centrar verticalmente el logo y el texto */
}

.logo {
  width: 50px; /* Ajusta el tamaño a 45px */
  height: 50px; /* Ajusta el tamaño a 45px */
  margin-right: 10px; /* Espacio entre el logo y el texto */
}

.navbar-nav {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}

.nav-item {
  margin-left: 20px;
}

.nav-link {
  background-image: linear-gradient(150deg, #64B5F6, #1976D2, #FFFFFF); /* Gradiente llamativo */
  border-radius: 8px;
  color: #fff;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  padding: 4px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
}

.nav-link span {
  background-color: #263238; /* Fondo gris oscuro */
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.3s;
}

.nav-link:hover span {
  background: none;
}

/* Botón "Regístrate" */
.btn-register {
  background-image: linear-gradient(150deg, #FF7043, #26ff9a, #42A5F5); /* Otro gradiente vibrante */
  border-radius: 8px;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-register span {
  background-color: #263238; /* Fondo gris oscuro */
  padding: 8px 16px;
  border-radius: 6px;
}

.btn-register:hover span {
  background: none;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 992px) {
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.9); /* Fondo oscuro sólido */
    padding: 10px;
    border-radius: 8px;
    position: relative;
    z-index: 999;
    max-height: 80vh;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    overflow-y: auto;
  }

  .navbar-collapse.show {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9); /* Fondo sólido cuando el menú está abierto */
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
  }

  .nav-item {
    margin-left: 0;
    margin-top: 10px;
  }

  .btn-register {
    margin-top: 20px;
    width: 100%;
  }
}

body {
  padding-top: 80px;
}
</style>
