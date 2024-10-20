<template>
  <header :class="{ transparent: !isScrolled, scrolled: isScrolled }" :style="headerStyle">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <!-- Mostrar texto si useTextInsteadOfLogo es true -->
        <span 
          v-if="headerData.useTextInsteadOfLogo" 
          :style="{ color: headerData.logoTextColor }"  
        >
          {{ headerData.logoText }}
        </span>
        <img 
          v-else 
          :src="headerData.logoUrl" 
          alt="Logo" 
          style="height: 40px;" 
        />
      </a>
      <!-- Botón de menú (hamburguesa) visible solo en pantallas pequeñas -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Elementos del menú -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#inicio"><span>{{ headerData.buttonNames.inicio }}</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#quienes-somos"><span>{{ headerData.buttonNames["quienes-somos"] }}</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#nuestros-servicios"><span>{{ headerData.buttonNames["nuestros-servicios"] }}</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto"><span>{{ headerData.buttonNames.contacto }}</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import colors from '@/public/data/colors.json';
import headerData from '@/public/data/header.json'; // Importa el header.json

export default {
  props: {
    isScrolled: Boolean,
    logoUrl: {
      type: String,
      default: '/logo.png' // Valor por defecto si no se pasa ningún logo
    }
  },
  data() {
    return {
      headerData // Almacena los datos del header.json
    };
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
/* Estilos del header y navbar */

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  color: #fff;
  transition: background-color 0.3s;
}

header.transparent {
  background-color: transparent;
}

header.scrolled {
  background-color: rgba(0, 0, 0, 0.8);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.navbar-brand img {
  height: 100px; /* Ajusta la altura del logo según tus necesidades */
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
  background-image: linear-gradient(150deg, #020242, #01257D, #00A9FF);
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

@media (max-width: 992px) {
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.9);
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
    background: rgba(0, 0, 0, 0.9);
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
}

body {
  padding-top: 80px;
}
</style>
