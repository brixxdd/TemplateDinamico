
Para restaurar el efecto de cambio de color en el header al hacer scroll, debes asegurarte de que enableScrolledBackground siga funcionando correctamente. Además, necesitamos mantener la opción de activación/desactivación del gradiente en los enlaces de navegación.

Aquí te dejo el código corregido para que ambos efectos funcionen al mismo tiempo:

Modificaciones en el archivo header.json:
json
Copiar código
{
  "useTextInsteadOfLogo": false,
  "logoUrl": "https://cdn.pixabay.com/photo/2016/04/01/00/22/cat-1298141_1280.png",
  "logoText": "DevPilots",
  "logoTextColor": "white",
  "buttonNames": {
    "inicio": "Inicio",
    "quienes-somos": "Nosotros",
    "nuestros-servicios": "Servicios",
    "contacto": "Contacto"
  },
  "navLinkStyles": {
    "enableGradient": true,
    "backgroundGradient": "linear-gradient(150deg, #020242, #01257D, #00A9FF)",
    "textColor": "#fff",
    "borderRadius": "8px",
    "fontSize": "16px",
    "padding": "8px",
    "hoverBackgroundColor": "#111"
  }
}
Modificaciones en el archivo Header.vue:
vue
Copiar código
<template>
  <header :class="{ transparent: !isScrolled, scrolled: isScrolled && enableScrolledBackground }" :style="headerStyle">
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
            <a class="nav-link" href="#inicio" :style="navLinkStyle"><span>{{ headerData.buttonNames.inicio }}</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#quienes-somos" :style="navLinkStyle"><span>{{ headerData.buttonNames['quienes-somos'] }}</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#nuestros-servicios" :style="navLinkStyle"><span>{{ headerData.buttonNames['nuestros-servicios'] }}</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto" :style="navLinkStyle"><span>{{ headerData.buttonNames.contacto }}</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import colors from '@/public/data/colors.json';
import headerData from '@/public/data/header.json'; 

export default {
  props: {
    isScrolled: Boolean
  },
  data() {
    return {
      headerData, 
      enableScrolledBackground: colors.header.enableScrolledBackground
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: this.isScrolled && this.enableScrolledBackground
          ? colors.header.scrolledBackgroundColor
          : colors.header.backgroundColor,
      };
    },
    navLinkStyle() {
      return {
        backgroundImage: this.headerData.navLinkStyles.enableGradient
          ? this.headerData.navLinkStyles.backgroundGradient
          : 'none',
        color: this.headerData.navLinkStyles.textColor,
        borderRadius: this.headerData.navLinkStyles.borderRadius,
        fontSize: this.headerData.navLinkStyles.fontSize,
        padding: this.headerData.navLinkStyles.padding,
      };
    }
  }
};
</script>

<style scoped>
/* Estilos generales del header y navbar */
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
