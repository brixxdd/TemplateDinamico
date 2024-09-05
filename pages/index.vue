
<template>
  <div>
    
        <section id="inicio" class="bg-dark text-white text-center d-flex align-items-center justify-content-center position-relative" style="height: 100vh;">
        <!-- Contenido para la sección de Inicio -->
        <video autoplay loop muted class="w-100 h-100 object-fit-cover">
            <source src="/costa rica.mp4" type="video/mp4">
            Tu navegador no soporta el formato de video.
        </video>
        <div class="overlay position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center">
            <h1 class="display-4">Bienvenido a Nuestra Página</h1>
            <p class="lead">Explora nuestra plataforma y aprende más sobre nosotros.</p>
            <a href="#quienes-somos" class="btn btn-primary btn-lg">Conoce más</a>
        </div>
        </section>
        
        <section id="quienes-somos" class="py-5 bg-light">
        <!-- Contenido para la sección de ¿Quiénes somos? -->
        <div class="container">
            <h2 class="text-center mb-4">¿Quiénes Somos?</h2>
            <p class="text-center">Aquí va una breve descripción sobre nosotros.</p>
        </div>
        </section>


        <section id="la-plataforma" class="py-5 bg-light">
        <!-- Contenido para la sección de La plataforma -->
        <div class="container">
            <h2 class="text-center mb-4">La Plataforma</h2>
            <p class="text-center">Información sobre la plataforma.</p>
        </div>
        </section>

        
        <!--<section id="contacto" class="py-5 bg-light">
        <div>
            <ContactZone />
        </div>
        </section>-->
  </div> 

  </template>