<template>
  <footer class="footer" :style="footerStyle">
    <div class="footer-section">
      <h4>{{ colors.footer['¿QUÉ HACEMOS?'] }}</h4>
      <ul class="footer-list">
        <li>{{ colors.footer.l1 }}</li>
        <li>{{ colors.footer.l2 }}</li>
        <li>{{ colors.footer.l3 }}</li>
        <li>{{ colors.footer.l4 }}</li>
        <li>{{ colors.footer.l5 }}</li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>{{colors.footer.Redes}}</h4>
      <div class="social-links">
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" aria-label="Correo Electrónico">
          <i class="fa-solid fa-envelope social-icon" :style="{ color: colors.footer.socialIconColor.email }"></i>
        </a>
        <a href="https://facebook.com/tuperfil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i class="fa-brands fa-facebook social-icon" :style="{ color: colors.footer.socialIconColor.facebook }"></i>
        </a>
        <a href="https://instagram.com/tuperfil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i class="fa-brands fa-instagram social-icon" :style="{ color: colors.footer.socialIconColor.instagram }"></i>
        </a>
        <a href="https://wa.me/9622242393" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i class="fa-brands fa-whatsapp social-icon" :style="{ color: colors.footer.socialIconColor.whatsapp }"></i>
        </a>
      </div>
    </div>

    <div class="footer-section">
      <p>{{ colors.footer.p1 }}</p>
      <p>{{ colors.footer.p2 }}</p>
      <p>{{ colors.footer.p3 }}</p>
      <p>{{ colors.footer.p4 }}</p>
    </div>

    <p class="footer-links">
      <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">{{ colors.footer.Terminos }}</a> | 
      <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">{{ colors.footer.Privacidad }}</a>
    </p>

    <ModalTerms />
    <ModalPrivacy />

    <p class="footer-copyright">
      © {{ new Date().getFullYear() }} {{colors.footer.derechos}}
    </p>
  </footer>
</template>

<script>
import colors from '@/public/data/colorsFooter.json';
import ModalTerms from '~/components/ModalTerms.vue';
import ModalPrivacy from '~/components/ModalPrivacy.vue';

export default {
  components: {
    ModalTerms,
    ModalPrivacy,
  },
  computed: {
    footerStyle() {
      return {
        backgroundColor: colors.footer.backgroundColor || '#2c3e50',
        color: colors.footer.textColor || '#ffffff',
        borderTop: `1px solid ${colors.footer.borderColor || 'rgba(255, 255, 255, 0.1)'}`
      };
    },
    colors() {
      return colors;
    }
  }
};
</script>

<style scoped>
  .footer {
    padding: 15px 2%;
    text-align: center; /* Centrar todo el contenido del footer */
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Centrar las secciones dentro del contenedor */
    gap: 15px;
    margin-top: auto;
  }

  .footer-section {
    flex: 1 1 200px;
    min-width: 150px;
    max-width: 250px;
    text-align: center; /* Centrar contenido de cada sección */
  }

  .footer-section h4 {
    font-size: 1em;
    margin-bottom: 8px;
    color: #ffffff;
  }

  .footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #d1d1d1;
    font-size: 0.9em;
  }

  .footer-list li {
    margin-bottom: 4px;
  }

  .social-links {
    display: flex;
    gap: 15px;
    justify-content: center; /* Centrar los iconos de redes sociales */
    margin-top: 10px;
  }

  .social-icon {
    font-size: 1.5em;
    transition: transform 0.3s, color 0.3s;
  }

  .social-icon:hover {
    transform: scale(1.15);
    filter: brightness(1.2);
  }

  .footer-links {
    text-align: center;
    width: 100%;
    font-size: 0.8em;
    margin-top: 10px;
  }

  .footer-links a {
    text-decoration: none;
    padding: 0 6px;
    transition: color 0.3s, text-decoration 0.3s;
  }

  .footer p {
    margin: 0;
    font-size: 0.75em;
  }

  .footer-section p {
    margin: 5px 0;
  }

  .footer h4 {
    margin: 5px 0;
  }

  .footer-copyright {
    text-align: center;
    width: 100%;
    font-size: 0.65em;
    margin-top: 8px;
  }

  /* Ajustes para pantallas medianas */
  @media (max-width: 768px) {
    .footer {
      padding: 12px;
      flex-direction: column;
      align-items: center;
    }
    .footer-section {
      flex: 1 1 100%;
      max-width: 100%;
    }
    .social-icon {
      font-size: 1.3em;
    }
  }

  /* Ajustes para pantallas pequeñas */
  @media (max-width: 576px) {
    .footer {
      padding: 10px;
      flex-direction: column;
      align-items: center;
    }
    .footer-section {
      flex: 1 1 100%;
      max-width: 100%;
    }
    .social-icon {
      font-size: 1.2em;
    }
  }
</style>