
# TemplateDinamico

  

Este proyecto es una landing page dinámica construida con Nuxt 3, diseñada para ofrecer servicios de creación de aplicaciones a medida, tanto empresariales como multiplataforma, y landing pages de uso fácil. La página está enfocada en promocionar estos servicios, permitiendo que los usuarios se pongan en contacto para solicitar soluciones personalizadas.

  

## tabla de contenidos

-[ Instalación ](  #Instalación  )

-[ Uso ](  #uso  )

-[ Manual de Uso para Configuración de Estilos ](  #Manual   )

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

  

## npm

npm install

npm install @nuxt/kit@^3.13.2

npm install @popperjs/core@^2.11.8

npm install bootstrap@^5.3.3

npm install nuxt@^3.13.2

npm install swiper@^11.1.12

npm install vue@latest

npm install vue-flux@^7.0.0-beta.6

## Uso

para ejecutar el proyecto, utilice el siguiente comando:

npm

npm run dev

## Manual
### Manual de Uso para Configuración de Estilos

Este documento describe cómo personalizar los estilos de tu landing page utilizando el archivo de configuración JSON. Este archivo permite ajustar colores y fondos de diferentes secciones, como el encabezado, el pie de página y la zona de contacto.

## Estructura del Archivo colors.json

El archivo de configuración JSON está dividido en tres secciones principales: `header`, `footer` y `zoneContact`.

**Puedes encontrar y modificar este archivo en:**
public/data/colors.json

### 1. Encabezado (`header`)

La sección del encabezado permite personalizar los colores y estilos relacionados con la barra de navegación y el fondo del encabezado.

- **`backgroundColor`**: Color de fondo del encabezado (usualmente transparente por defecto).
- **`scrolledBackgroundColor`**: Color de fondo cuando la página es desplazada.
- **`navLinkColor`**: Color de los enlaces de navegación.
- **`navLinkBackgroundColor`**: Color de fondo de los enlaces de navegación.
- **`navLinkHoverBackgroundColor`**: Color de fondo de los enlaces de navegación al pasar el cursor sobre ellos.
- **`buttonRegisterBackgroundColor`**: Color de fondo del botón de registro.
- **`buttonRegisterHoverBackgroundColor`**: Color de fondo del botón de registro al pasar el cursor sobre él.
- **`enableScrolledBackground`**: (booleano) Esta propiedad controla si el efecto de fondo al desplazar la página está activado o desactivado.
La propiedad `enableScrolledBackground` se ha agregado para permitir activar o desactivar el cambio de color de fondo del encabezado al hacer scroll en la página.
> [!NOTE]
>  **Valor `true`**: Activa el efecto de fondo al desplazarse. El fondo del encabezado cambiará al color especificado en `scrolledBackgroundColor`.
>
> **Valor `false`**: Desactiva el efecto de fondo al desplazarse. El encabezado permanecerá con el color definido en `backgroundColor`, incluso cuando se desplaza la página.
- 
### Ejemplo:
```json
{

"header":  {

"backgroundColor":  "rgba(0, 0, 0, 0)",

"scrolledBackgroundColor":  "#01257D",

"navLinkColor":  "#ff5c35",

"navLinkBackgroundColor":  "#ffffff",

"navLinkHoverBackgroundColor":  "#00796b",

"buttonRegisterBackgroundColor":  "#F57313",

"buttonRegisterHoverBackgroundColor":  "#00796b",

"enableScrolledBackground":  true

}
```
### 2. Pie de Página (`footer`)

La sección del pie de página permite personalizar los colores del fondo y del texto.

-   **`backgroundColor`**: Color de fondo del pie de página.
-   **`textColor`**: Color del texto en el pie de página.
```  json
 "footer": {
  "backgroundColor": "#192733",
  "textColor": "#ffffff"
}
```
### 3. Zona de Contacto (`zoneContact`)

La sección de zona de contacto permite ajustar los colores y estilos relacionados con el contenedor de información de contacto.

-   **`contact-container-backgroundColor-gradient1`**: Primer color de un gradiente de fondo para el contenedor de contacto.
-   **`contact-container-backgroundColor-gradient2`**: Segundo color de un gradiente de fondo para el contenedor de contacto.
-   **`contact-info-backgroundColor`**: Color de fondo de la información de contacto.
-   **`textPrincipal`**: Color del texto principal.
-   **`textPrincipal-borde`**: Color del borde del texto principal.
-   **`texto-p`**: Color del texto en los párrafos.
-   **`gradient1`**: Color del primer gradiente.
-   **`gradient2`**: Color del segundo gradiente.
-   **`button`**: Gradiente de fondo para el botón en la zona de contacto.
``` json
"zoneContact": {
  "contact-container-backgroundColor-gradient1": "#0A1E5E",
  "contact-container-backgroundColor-gradient2": "F5F8FF",
  "contact-info-backgroundColor": "rgba(1, 37, 125, 0.8)",
  "textPrincipal": "rgba(255, 255, 255, 0.9)",
  "textPrincipal-borde": "rgb(180, 180, 180)",
  "texto-p": "#E0E0E0",
  "gradient1": "rgba(1, 37, 125, 0.7)",
  "gradient2": "rgba(20, 57, 140, 0.7)",
  "button": "linear-gradient(to right, #01257D)"
}

```

## Estructura del Archivo `header.json`

**El componente del encabezado (`Header.vue`) utiliza un archivo JSON para su configuración.**

**Puedes encontrar y modificar este archivo en:**

`public/data/header.json`

### Personalización disponible

El archivo `header.json` te permite personalizar lo siguiente:

-   **Logo o Texto:**
    -   **`useTextInsteadOfLogo` (true o false):** Define si se utiliza una imagen como logo o un texto. Si está en `true`, se usará el texto del logo configurado en `logoText`; si está en `false`, se mostrará una imagen de logo desde la URL especificada en `logoUrl`.
-   **URL del Logo:** Especifica la URL de la imagen del logo (si `useTextInsteadOfLogo` está en `false`).
-   **Texto del Logo:** Define el texto del logo (si `useTextInsteadOfLogo` está en `true`).
-   **Color del Texto del Logo:** Establece el color del texto del logo (si se usa texto).
-   **Nombres de los botones de navegación:** Define los nombres que aparecerán en los botones de navegación.
-   **Estilo de Enlaces de Navegación:**
    -   **Habilitar/Deshabilitar Gradiente:** Controla si los enlaces de navegación tendrán un fondo con gradiente mediante la propiedad `enableGradient` (true o false).
    -   **Gradiente de Fondo:** Define el gradiente de fondo cuando `enableGradient` está habilitado.
    -   **Color del Texto:** Establece el color del texto de los enlaces de navegación.
    -   **Bordes, Tamaño de Fuente y Espaciado:** Personaliza el radio de borde, tamaño de fuente y el relleno de los botones de navegación.
    -   **Color de Fondo en Hover:** Define el color de fondo que aparecerá al pasar el mouse por encima de los enlaces.

### Ejemplo de `header.json`:
``` json
{

"useTextInsteadOfLogo":  false,

"logoUrl":  "https://cdn.pixabay.com/photo/2016/04/01/00/22/cat-1298141_1280.png",

"logoText":  "DevPilots",

"logoTextColor":  "white",

"buttonNames":  {

"inicio":  "Inicio",

"quienes-somos":  "Nosotros",

"nuestros-servicios":  "Servicios",

"contacto":  "Contacto"

},

"navLinkStyles":  {

"enableGradient":  true,

"backgroundGradient":  "linear-gradient(150deg, #020242, #01257D, #00A9FF)",

"textColor":  "#fff",

"borderRadius":  "8px",

"fontSize":  "16px",

"padding":  "8px",

"hoverBackgroundColor":  "#111"

}

}
```

## Estructura del Archivo `heroslidershow.json`

**El componente de carrusel de imágenes (`HeroSliderShow.vue`) utiliza un archivo JSON para su configuración.**

**Puedes encontrar y modificar este archivo en:**

`public/data/heroSlideshow.json`

### Personalización disponible

Este archivo JSON te permite personalizar varios aspectos del carrusel de imágenes en el slider, incluyendo:

1.  **Efecto de transición**:
    
    -   **`effect`**: Aquí puedes habilitar o deshabilitar los efectos visuales disponibles para la transición entre las diapositivas. Las opciones disponibles son:
        -   **`cube`**: Si está en `true`, el carrusel usará el efecto de cubo tridimensional.
        -   **`fade`**: Si está en `true`, el carrusel usará el efecto de desvanecimiento suave entre las diapositivas.
        -   **`flip`**: Si está en `true`, el carrusel tendrá un efecto de volteo como transición.
        -   **`coverflow` y `creative`**: Aunque están presentes en el JSON, actualmente están configurados en `false`. Pueden habilitarse si se desean utilizar estos efectos en el futuro.
    
> [!NOTE]
>  Solo uno de los efectos puede estar activado a la vez. El componente determinará cuál usar basándose en el primer efecto habilitado en el archivo JSON.
    
2.  **Autoplay (Reproducción automática)**:
    
    -   **`autoplayDelay`**: Controla el tiempo de espera (en milisegundos) antes de que la siguiente diapositiva sea mostrada automáticamente. Por ejemplo, `5000` significa que el slider cambiará de imagen cada 5 segundos.
3.  **Diapositivas (Slides)**:
    
    -   **`slides`**: Es un array de objetos que define cada diapositiva individualmente. Cada objeto dentro del array contiene:
        -   **`imageSrc`**: La ruta de la imagen que se mostrará en la diapositiva.
        -   **`title`**: El título que se mostrará sobre la imagen.
        -   **`description`**: Una breve descripción que complementa el título y la imagen.
### Ejemplo de `heroslidershow.json`:
``` json 
{

"effect":  {

"cube":  false,

"fade":  true,

"flip":  false,

"coverflow":  false,

"creative":  false

},

"autoplayDelay":  5000,

"slides":  [

{

"imageSrc":  "/imagen1.jpg",

"title":  "¡Revive tu Computadora!",

"description":  "Dale una nueva vida a tu equipo con reparaciones profesionales y optimizaciones que mejoran su rendimiento y prolongan su vida útil."

},

{

"imageSrc":  "/imagen2.jpg",

"title":  "¡Soluciones Móviles para Cada Necesidad!",

"description":  "Desde la reparación de smartphones hasta la actualización de software, aseguramos que tu dispositivo móvil funcione como nuevo."

},

{

"imageSrc":  "/imagen3.jpg",

"title":  "¡Recuperación de Datos Rápida y Segura!",

"description":  "No pierdas la esperanza en tus archivos valiosos. Nuestros expertos utilizan técnicas avanzadas para recuperar datos perdidos de manera eficiente."

},

{

"imageSrc":  "/imagen4.jpg",

"title":  "¡Mantén tu Software Actualizado!",

"description":  "Te ayudamos a mantener tu sistema operativo y aplicaciones al día, garantizando la seguridad y el rendimiento óptimo de tus dispositivos."

}

]

}
 ```
### Personalización de Reproducción Automática

-   Puedes ajustar la velocidad de cambio entre las diapositivas modificando el valor de `autoplayDelay`. Por ejemplo, `3000` cambiará las imágenes cada 3 segundos, mientras que `10000` lo hará cada 10 segundos.

### Personalización de Diapositivas

-   Puedes agregar, eliminar o modificar las diapositivas dentro del array `slides`. Cada diapositiva incluye la ruta de la imagen (`imageSrc`), un título (`title`) y una descripción (`description`). Simplemente agrega nuevos objetos dentro del array para añadir más diapositivas o modifica los existentes para cambiar el contenido mostrado.

## Estructura del Archivo WhoAreWe.json

**El componente `WhoAreWe.vue` utiliza un archivo JSON para definir el contenido y las características que se muestran en la sección "Nosotros" de la página.**

### Ubicación del archivo

El archivo JSON puede ser encontrado en:
`public/data/WhoAreWe.json`


### Explicación del contenido del archivo

El archivo `WhoAreWe.json` contiene dos partes principales: `description` y `features`. Estas partes son editables y te permiten personalizar el texto y los íconos que aparecen en la sección "Nosotros" directamente desde el archivo JSON.

### Descripción de los campos

-   **description**: Es un campo de texto donde puedes definir la descripción principal que se mostrará sobre tu empresa o servicio.
    
    Ejemplo:
   
    
    `"description": "Nos dedicamos a devolver la funcionalidad y eficiencia a tus dispositivos. Con experiencia en múltiples plataformas, ofrecemos soluciones rápidas y confiables para que puedas concentrarte en lo que realmente importa."` 
    
-   **features**: Es un arreglo de objetos que define cada una de las características o servicios destacados. Cada objeto tiene los siguientes campos:
    
    -   **icon**: Especifica la clase de FontAwesome para el ícono que acompaña a la característica. Ejemplo: `"fas fa-laptop"`
        
    -   **title**: Define el título o nombre de la característica o servicio. Ejemplo: `"Reparación Integral de Computadoras"`
        
    -   **description**: Un breve texto descriptivo de la característica. Ejemplo: `"Ya sea Windows, Mac o Linux, restauramos el rendimiento óptimo de tu equipo con precisión y cuidado."`
        
    -   **iconColor**: Permite definir el color del ícono utilizando un valor en formato hexadecimal. Ejemplo: `"#0078d7"`
        

### Ejemplo Completo de `WhoAreWe.json`
``` json
{

"description":  "Nos dedicamos a devolver la funcionalidad y eficiencia a tus dispositivos. Con experiencia en múltiples plataformas, ofrecemos soluciones rápidas y confiables para que puedas concentrarte en lo que realmente importa.",

"features":  [

{

"icon":  "fas fa-laptop",

"title":  "Reparación Integral de Computadoras",

"description":  "Ya sea Windows, Mac o Linux, restauramos el rendimiento óptimo de tu equipo con precisión y cuidado.",

"iconColor":  "#0078d7"

},

{

"icon":  "fas fa-mobile-alt",

"title":  "Sistemas Operativos Móviles",

"description":  "Solucionamos problemas en dispositivos Android y iOS, optimizando su funcionamiento para que siempre estén al máximo de su potencial.",

"iconColor":  "#ff5722"

},

{

"icon":  "fas fa-hands-helping",

"title":  "Asistencia Técnica Personalizada",

"description":  "Te acompañamos en cada etapa del proceso, asegurándonos de que tus dispositivos reciban la mejor atención y asesoría.",

"iconColor":  "#28a745"

}

]

}
 ```

### Cambios personalizables

-   **Texto de descripción**: Puedes modificar el contenido del campo `description` para cambiar la descripción general de la sección.
-   **Características (features)**: Puedes agregar, eliminar o modificar las características en el arreglo `features`, actualizando los íconos, títulos, descripciones y colores según tus necesidades.
-   **Iconos**: Puedes cambiar los íconos utilizando las clases de FontAwesome disponibles.
-   **Colores**: Cambia los colores de los íconos ajustando los valores hexadecimales en el campo `iconColor`.

### Ejemplo Completo de `services.json`


El archivo `services.json` se encuentra en el directorio `public/data/services` y contiene información sobre los servicios ofrecidos. Este archivo permite editar los detalles de cada servicio sin necesidad de modificar el código del componente Vue.

``` json
{
    "services": [
        {
            "title": "Reparación Integral de Computadoras",
            "description": "Nos especializamos en la reparación integral de computadoras...",
            "image": "imagen1.png"
        },
        {
            "title": "Mantenimiento Preventivo",
            "description": "Además de la reparación, ofrecemos servicios de mantenimiento preventivo...",
            "image": "imagen2.jpg"
        },
        {
            "title": "Asistencia Técnica Personalizada",
            "description": "Entendemos que cada cliente tiene necesidades únicas...",
            "image": "imagen3.jpg"
        },
        {
            "title": "Reparación de Dispositivos Móviles",
            "description": "También ofrecemos reparación de dispositivos móviles...",
            "image": "imagen4.jpg"
        }
    ]
}
```

### Cómo editar los servicios

1.  **Título**: Cambia el valor de `title` para actualizar el nombre del servicio.
2.  **Descripción**: Modifica el valor de `description` para cambiar la información que se muestra sobre el servicio.
3.  **Imagen**: Cambia el valor de `image` para usar una imagen diferente (asegúrate de que la nueva imagen esté en la carpeta correspondiente).

### Integración en el Componente

El componente que muestra los servicios utiliza las propiedades del objeto `service` que se pasa como prop. Esto permite que los cambios realizados en el archivo JSON se reflejen automáticamente en la interfaz de usuario sin necesidad de realizar modificaciones en el código del componente.

# Sección de Contacto

Esta sección permite a los usuarios ponerse en contacto con el equipo de DevPilots. Incluye información de contacto y un formulario para enviar consultas.

## Contenido de `contacto.json`

El archivo `contacto.json` contiene la siguiente información:

```json
{
    "tittle": "Contactanos",
    "subtitulo": "¿Comó podemos ayudarte?",
    "p1": "¿Necesitas hablar con nosotros?",
    "direccion": "Tapachula, Chiapas 30700",
    "celphone": "+52 (962) 234-5678",
    "correo":"devpilots.oficial@example.com"
}
```

### Campos

-   **tittle**: El título principal de la sección de contacto.  
    Ejemplo: "Contactanos"
    
-   **subtitulo**: Un subtítulo que proporciona un contexto adicional.  
    Ejemplo: "¿Comó podemos ayudarte?"
    
-   **p1**: Un mensaje de bienvenida o invitación a los usuarios.  
    Ejemplo: "¿Necesitas hablar con nosotros?"
    
-   **direccion**: La dirección física de la empresa.  
    Ejemplo: "Tapachula, Chiapas 30700"
    
-   **celphone**: Número de teléfono para contacto.  
    Ejemplo: "+52 (962) 234-5678"
    
-   **correo**: Dirección de correo electrónico para consultas.  
    Ejemplo: "devpilots.oficial@example.com"
    

## Uso en la Aplicación

Esta información se utiliza en el componente `ContactZone.vue` para mostrar datos de contacto relevantes y permitir que los usuarios envíen sus consultas a través de un formulario.

## Colores de la Sección de Contacto

Los colores utilizados en la sección de contacto se definen en el archivo `colors.json`. A continuación, se detallan los colores que pueden ser editados:
``` json
{
  "zoneContact": {
    "contact-container-backgroundColor-gradient1": "#0A1E5E",
    "contact-container-backgroundColor-gradient2": "F5F8FF",
    "contact-info-backgroundColor": "rgba(1, 37, 125, 0.8)",
    "textPrincipal": "rgba(255, 255, 255, 0.9)",
    "textPrincipal-borde": "rgb(180, 180, 180)",
    "texto-p": "#E0E0E0",
    "gradient1": "rgba(1, 37, 125, 0.7)",
    "gradient2": "rgba(20, 57, 140, 0.7)",
    "button": "linear-gradient(to right, #01257D)"
  }
}

```
## Estructura del Archivo colorsFooter.json

# Sección de Contacto

Esta sección permite a los usuarios ponerse en contacto con el equipo de DevPilots. Incluye información de contacto y un formulario para enviar consultas.

## Contenido de `contacto.json`

El archivo `contacto.json` contiene la siguiente información:
**Puedes encontrar y modificar este archivo en:**
public/data/colorsFooter.json

```json
{
    "tittle": "Contactanos",
    "subtitulo": "¿Comó podemos ayudarte?",
    "p1": "¿Necesitas hablar con nosotros?",
    "direccion": "Tapachula, Chiapas 30700",
    "celphone": "+52 (962) 234-5678",
    "correo":"devpilots.oficial@example.com"
}
```
### Campos de Color

-   **contact-container-backgroundColor-gradient1**: Primer color del fondo del contenedor de contacto.
    
-   **contact-container-backgroundColor-gradient2**: Segundo color del fondo del contenedor de contacto.
    
-   **contact-info-backgroundColor**: Color de fondo de la información de contacto.
    
-   **textPrincipal**: Color del texto principal.
    
-   **textPrincipal-borde**: Color del borde del texto principal.
    
-   **texto-p**: Color del texto de párrafos.
    
-   **gradient1**: Primer color del gradiente.
    
-   **gradient2**: Segundo color del gradiente.
    
-   **button**: Estilo del fondo del botón.
## Colores del Pie de Página

Los colores utilizados en el pie de página se definen en el archivo `colorsFooter.json`. A continuación, se detallan los colores que pueden ser editados:

``` json
{
    "footer": {
        "backgroundColor": "#020242",
        "textColor": "#ffffff",
        "linkColor": "#d1d1d1",
        "hoverLinkColor": "#ffffff",
        "borderColor": "rgba(255, 255, 255, 0.1)",
        "socialIconColor": {
            "email": "#6c759d",
            "facebook": "#4267b2",
            "instagram": "#c13584",
            "whatsapp": "#25d366"
        },
        "derechos": "Devpilots. Todos los derechos reservados.",
        "p1": "Ensalza: agencia de desarrollo y diseño web",
        "p2": "Dirección: Calle Falsa 123, Ciudad, País",
        "p3": "Tel: +52 5657895551",
        "p4": "Mail: info@ensalza.com",
        "¿QUÉ HACEMOS?": "¿QUÉ HACEMOS?",
        "l1": "Webs corporativas",
        "l2": "Desarrollo web a medida",
        "l3": "Tiendas online",
        "l4": "Marketing online",
        "l5": "Consultoría de desarrollo web",
        "Terminos": "Términos y Condiciones",
        "Privacidad": "Aviso de Privacidad",
        "Redes": "SÍGUENOS EN REDES"
    }
}
	
```

## Contribución
¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b nombre-de-la-rama).
Realiza tus cambios y haz un commit (git commit -m 'Agrega un nuevo cambio').
Envía tus cambios (git push origin nombre-de-la-rama).
Crea un pull request.


## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.