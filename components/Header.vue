<template>
  <header :class="{ transparent: !isScrolled, scrolled: isScrolled }" :style="headerStyle">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Balconeria en general Torre Fuerte</a>
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
  color: #fff;
  transition: background-color 0.3s;
}

/* Clase dinámica cuando se ha hecho scroll */
header.transparent {
  background-color: transparent;
}

header.scrolled {
  background-color: rgba(0, 0, 0, 0.8);
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
  margin-right: auto;
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
  border: 0;
  background-image: linear-gradient(
    150deg,
    #f12711,
    #f5af19,
    #00ddff
  );
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
  background-color: #111;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.3s;
}

.nav-link:hover span {
  background: none;
}

/* Botón "Regístrate" */
.btn-register {
  background-image: linear-gradient(150deg, #f12711, #f5af19, #00ddff);
  border-radius: 8px;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-register span {
  background-color: #111;
  padding: 8px 16px;
  border-radius: 6px;
}

.btn-register:hover span {
  background: none;
}

@media (max-width: 992px) {
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.9); /* Fondo oscuro sólido */
    padding: 10px;
    border-radius: 8px;
    position: relative;
    z-index: 999; /* Superponer sobre otros elementos */
    max-height: 80vh; /* Limitar la altura máxima del menú */
    border-bottom: 2px solid rgba(255, 255, 255, 0.2); /* Borde inferior */
    overflow-y: auto; /* Habilitar el scroll dentro del menú si es necesario */
  }

  .navbar-collapse.show {
    position: fixed;
    top: 80px; /* Ajustar según la altura de tu header */
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9); /* Fondo sólido cuando el menú está abierto */
    border-bottom: 2px solid rgba(255, 255, 255, 0.2); /* Borde inferior visible */
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