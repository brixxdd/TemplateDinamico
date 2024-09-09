<template>
  <header :class="{ transparent: !isScrolled, scrolled: isScrolled }" :style="headerStyle">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">DevPilots</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" :style="navLinkStyle" href="#inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :style="navLinkStyle" href="#quienes-somos">¿Quiénes somos?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :style="navLinkStyle" href="#la-plataforma">La plataforma</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :style="navLinkStyle" href="#contacto">Contacto</a>
          </li>
        </ul>
        <div class="ml-auto">
          <button class="btn btn-register" :style="buttonRegisterStyle">Regístrate</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import colors from '~/assets/styles/colors.json';

export default {
  props: {
    isScrolled: Boolean
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: this.isScrolled ? colors.header.scrolledBackgroundColor : colors.header.backgroundColor,
      };
    },
    navLinkStyle() {
      return {
        backgroundColor: colors.header.navLinkBackgroundColor,
        color: colors.header.navLinkColor,
      };
    },
    buttonRegisterStyle() {
      return {
        backgroundColor: colors.header.buttonRegisterBackgroundColor,
      };
    }
  }
};
</script>

<style scoped>
header {
  color: #fff;
  padding: 1px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s;
}

header.transparent {
  background-color: transparent; /* Transparente por defecto */
}

header.scrolled {
  /* El color se maneja desde el estilo dinámico en computed */
}

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
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  border-color: #F57313;
}

.nav-link:hover {
  background-color: var(--navLinkHoverBackgroundColor);
}

.btn-register {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 20px;
}

.btn-register:hover {
  background-color: var(--buttonRegisterHoverBackgroundColor);
}

body {
  padding-top: 80px;
}
</style>
