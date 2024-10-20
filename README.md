# TemplateDinamico

  

Este proyecto es una landing page dinámica construida con Nuxt 3, diseñada para ofrecer servicios de creación de aplicaciones a medida, tanto empresariales como multiplataforma, y landing pages de uso fácil. La página está enfocada en promocionar estos servicios, permitiendo que los usuarios se pongan en contacto para solicitar soluciones personalizadas.

  

# tabla de contenidos

-[ Instalacion ](  #instalacion  )

-[ Uso ](  #uso  )

-[ Contribucion ](  #contribución  )

-[ Licencia ](  #licencia  )

  

## Instalación

1,clona el repositorio:

git clone [URL_DEL_REPOSITORIO](https://github.com/brixxdd/TemplateDinamico.git)

  

Nuxt 3 Minimal Starter

Look at the Nuxt 3 documentation to learn more.

Setup

2,Make sure to install the dependencies:

bashCopy

  

# npm

npm install

npm install @nuxt/kit@^3.13.2

npm install @popperjs/core@^2.11.8

npm install bootstrap@^5.3.3

npm install nuxt@^3.13.2

npm install swiper@^11.1.12

npm install vue@latest

npm install vue-flux@^7.0.0-beta.6

# Uso

para ejecutar el proyecto, utilice el siguiente comando:

npm

npm run dev

# Personalizacion

**El componente del encabezado (`Header.vue`) utiliza un archivo JSON para su configuración.**

**Puedes encontrar y modificar este archivo en:**

public/data/header.json

> El archivo `header.json` te permite personalizar:

>  - Si usar texto o una imagen como logo

>  - URL del logo (si se usa una imagen)

>  - Texto y color del logo (si se usa texto)

>  - Nombres de los botones de navegación

  
  



### Ejemplo de `header.json`:
``` json
{
  "useTextInsteadOfLogo": true,
  "logoUrl": "https://ejemplo.com/logo.png",
  "logoText": "DevPilots",
  "logoTextColor": "white",
  "buttonNames": {
    "inicio": "Inicio",
    "quienes-somos": "Nosotros",
    "nuestros-servicios": "Servicios",
    "contacto": "Contacto"
  }
}
```
## Otros archivos JSON para personalizar:
public/data/colorsFooter.json

public/data/colors.json

public/data/contacto.json

public/data/services.json

# Manual de Uso para Configuración de Estilos

Este documento describe cómo personalizar los estilos de tu landing page utilizando el archivo de configuración JSON. Este archivo permite ajustar colores y fondos de diferentes secciones, como el encabezado, el pie de página y la zona de contacto.

## Estructura del Archivo JSON

El archivo de configuración JSON está dividido en tres secciones principales: `header`, `footer` y `zoneContact`.

### 1. Encabezado (`header`)

La sección del encabezado permite personalizar los colores y estilos relacionados con la barra de navegación y el fondo del encabezado.

- **`backgroundColor`**: Color de fondo del encabezado (usualmente transparente por defecto).
- **`scrolledBackgroundColor`**: Color de fondo cuando la página es desplazada.
- **`navLinkColor`**: Color de los enlaces de navegación.
- **`navLinkBackgroundColor`**: Color de fondo de los enlaces de navegación.
- **`navLinkHoverBackgroundColor`**: Color de fondo de los enlaces de navegación al pasar el cursor sobre ellos.
- **`buttonRegisterBackgroundColor`**: Color de fondo del botón de registro.
- **`buttonRegisterHoverBackgroundColor`**: Color de fondo del botón de registro al pasar el cursor sobre él.

### Ejemplo:
```json
"header": {
  "backgroundColor": "rgba(0, 0, 0, 0)",
  "scrolledBackgroundColor": "#01257D",
  "navLinkColor": "#ff5c35",
  "navLinkBackgroundColor": "#ffffff",
  "navLinkHoverBackgroundColor": "#00796b",
  "buttonRegisterBackgroundColor": "#F57313",
  "buttonRegisterHoverBackgroundColor": "#00796b"
}
```
