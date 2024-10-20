# TemplateDinamico

Este proyecto es una landing page dinámica construida con Nuxt 3, diseñada para ofrecer servicios de creación de aplicaciones a medida, tanto empresariales como multiplataforma, y landing pages de uso fácil. La página está enfocada en promocionar estos servicios, permitiendo que los usuarios se pongan en contacto para solicitar soluciones personalizadas.

# tabla de contenidos
-[ Instalacion ]( #instalacion )
-[ Uso ]( #uso )
-[ Contribucion ]( #contribución )
-[ Licencia ]( #licencia )

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
> - Si usar texto o una imagen como logo
> - URL del logo (si se usa una imagen)
> - Texto y color del logo (si se usa texto)
> - Nombres de los botones de navegación


### Ejemplo de `header.json`:
```json
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

Otros archivos JSON para personalizar:

public/data/colorsFooter.json
public/data/colors.json
public/data/contacto.json
public/data/services.json

# Modifica estos archivos para ajustar la apariencia y el contenido de diferentes secciones de tu landing page.
Contribuir

Bifurca el repositorio.
Crea una nueva rama: git checkout -b feature-name .
Realiza los cambios.
Sube tu rama: git push origin feature-name .
Crea una solicitud de extracción.

Licencia
Este proyecto está licenciado bajo la  Licencia MIT .