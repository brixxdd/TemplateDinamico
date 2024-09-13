<template>
  <header :class="{ transparent: !isScrolled, scrolled: isScrolled }" :style="headerStyle">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/#">DevPilots</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/#inicio"><span>Inicio</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#quienes-somos"><span>¿Quiénes somos?</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#la-plataforma"><span>La plataforma</span></a>
          </li>

          
          <li class="nav-item">
            <!--<a class="nav-link" href="/contact">Contacto</a>-->
            <NuxtLink class="nav-link" to="/contact"><span>Contacto</span></NuxtLink>
          </li>


        </ul>
        <div class="ml-auto">
          <button class="btn btn-register" @click="$emit('open-register-modal')">
            <span>Regístrate</span>
          </button>
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
  background-color: transparent;
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

.nav-link:active {
  transform: scale(0.9);
}

.btn-register {
  border: 0;
  background-image: linear-gradient(
    150deg,
    #f12711,
    #f5af19,
    #00ddff
  );
  border-radius: 8px;
  color: #fff;
  display: flex;
  font-size: 16px;
  padding: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-register span {
  background-color: #111;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.3s;
}

.btn-register:hover span {
  background: none;
}

.btn-register:active {
  transform: scale(0.9);
}

body {
  padding-top: 80px;
}
</style>