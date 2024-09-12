<template>
  <footer class="footer" :style="footerStyle">
    <div class="footer-section">
      <h4>¿QUÉ HACEMOS?</h4>
      <ul class="footer-list">
        <li>Webs corporativas</li>
        <li>Desarrollo web a medida</li>
        <li>Tiendas online</li>
        <li>Marketing online</li>
        <li>Consultoría de desarrollo web</li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>SÍGUENOS EN REDES</h4>
      <div class="social-links">
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" aria-label="Correo Electrónico">
          <i class="fa-solid fa-envelope social-icon" style="color: #6c759d;"></i>
        </a>
        <a href="https://facebook.com/tuperfil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i class="fa-brands fa-facebook social-icon" style="color: #4267b2;"></i>
        </a>
        <a href="https://instagram.com/tuperfil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i class="fa-brands fa-instagram social-icon" style="color: #c13584;"></i>
        </a>
        <a href="https://wa.me/9622242393" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i class="fa-brands fa-whatsapp social-icon" style="color: #25d366;"></i>
        </a>
      </div>
    </div>

    <div class="footer-section">
      <h4>¿NOS CUENTAS TU PROYECTO?</h4>
      <p>Ensalza: agencia de desarrollo y diseño web</p>
      <p>Dirección: Calle Falsa 123, Ciudad, País</p>
      <p>Tel: +52 5657895551</p>
      <p>Mail: info@ensalza.com</p>
    </div>

    <p class="footer-links">
      <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">Términos y Condiciones</a> | 
      <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">Aviso de Privacidad</a>
    </p>

    <ModalTerms />
    <ModalPrivacy />

    <p class="footer-copyright">
      © {{ new Date().getFullYear() }} Devpilots. Todos los derechos reservados.
    </p>
  </footer>
</template>

<script>
import colors from '~/assets/styles/colors.json';
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
      };
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 10px 2%;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
  margin-top: auto;
  background-color: #2c3e50;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section {
  flex: 1 1 150px;
  min-width: 120px;
  max-width: 200px;
}

.footer-section h4 {
  font-size: 0.9em;
  margin-bottom: 5px;
  color: #ffffff;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #d1d1d1;
  font-size: 0.8em;
}

.footer-list li {
  margin-bottom: 3px;
}

.social-links {
  display: flex;
  gap: 10px;
  margin: 10px 0;
  justify-content: flex-start;
}

.social-icon {
  font-size: 1.5em; /* Tamaño aumentado */
  transition: transform 0.3s, color 0.3s;
}

.social-icon:hover {
  transform: scale(1.15);
  filter: brightness(1.2);
}

.footer-links {
  text-align: center;
  width: 100%;
  font-size: 0.7em;
  color: #d1d1d1;
  margin-top: 8px;
}

.footer-links a {
  text-decoration: none;
  color: #d1d1d1;
  padding: 0 4px;
  transition: color 0.3s, text-decoration 0.3s;
}

.footer-links a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer p {
  margin: 0;
  font-size: 0.75em;
}

.footer p, .footer-section p {
  line-height: 1.3;
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

.footer-section h4 {
  font-size: 0.9em;
  margin-bottom: 5px;
  color: #ffffff;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #d1d1d1;
  font-size: 0.8em;
}

.footer-list li {
  margin-bottom: 3px;
}

.footer-links {
  text-align: center;
  width: 100%;
  font-size: 0.7em;
  color: #d1d1d1;
  margin-top: 8px;
}

.footer-links a {
  text-decoration: none;
  color: #d1d1d1;
  padding: 0 4px;
  transition: color 0.3s, text-decoration 0.3s;
}

.footer-links a:hover {
  color: #ffffff;
  text-decoration: underline;
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
  font-size: 0.6em;
  color: #d1d1d1;
  margin-top: 8px;
}

@media (max-width: 576px) {
  .footer {
    padding: 8px;
    flex-direction: column;
    align-items: center;
  }
  .social-icon {
    font-size: 1.3em; /* Tamaño reducido en pantallas pequeñas */
  }
}
</style>