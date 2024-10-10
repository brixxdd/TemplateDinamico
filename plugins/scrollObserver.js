export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-observer', {
    mounted(el) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      }, {
        threshold: 0.1 // Ajusta este valor según necesites
      });

      el.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
      });
    },
  });
});