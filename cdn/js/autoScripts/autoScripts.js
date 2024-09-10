document.addEventListener("DOMContentLoaded", function() {
function addScript(src, asyncOrDefer) {
  var script = document.createElement('script');
  script.src = src;
  if (asyncOrDefer) {
    script[asyncOrDefer] = true;
  }
  document.head.appendChild(script);
}

// Função para adicionar scripts específicos para determinadas páginas
function addPageSpecificScripts() {
  var path = window.location.pathname;
  var lang = document.documentElement.lang; // Obtém o idioma da página

  // Adiciona scripts comuns
  addScript('/test/cdn/js/mobile-menu.js', 'defer');
  addScript('/test/cdn/js/autoNavAndFooter.js', 'defer');
  addScript('/test/cdn/js/menuHref.js', 'defer');
  addScript('/test/cdn/js/theme-switcher.js', 'defer');
  addScript('/test/cdn/js/choose-language.js', 'defer');
  addScript('/test/cdn/js/lgbt-mode.js', 'defer');
  addScript('/test/cdn/js/updateVersionText.js', 'defer');

  // Adiciona scripts específicos para a página /blog/
  if (path === '/test/blog/') {
      addScript('/test/cdn/js/blog/search/blogSearchScript.js', 'defer');
      addScript('/test/cdn/js/blog/blogAlerts.js', 'defer');
  }

  // Adiciona scripts específicos para a página /about/
  if (path === '/test/br/about-me/' || path === '/test/us/about-me/') {
      addScript('https://www.youtube.com/iframe_api', 'defer');
      addScript('/test/cdn/js/playlist-player.js', 'defer');
  }

  // Adiciona scripts específicos para a página /portfolio/design-2d
  if (path === '/test/br/portfolio/design-2d' || path === '/test/us/portfolio/design-2d') {
      addScript('/cdn/js/portfolio/portfolioImageFullscreen.js', 'defer');
      if (lang === 'pt-br') {
          addScript('/test/cdn/js/portfolio/portfolio2DDesignSearchScript.js', 'defer');
      } else if (lang === 'en-us') {
          addScript('/test/cdn/js/portfolio/us/portfolioUs2DDesignSearchScript.js', 'defer');
      }
  }

  // Adiciona scripts específicos para a página /portfolio/minecraft
  if (path === '/test/br/portfolio/minecraft' || path === '/test/us/portfolio/minecraft') {
      addScript('/test/cdn/js/portfolio/portfolioImageFullscreen.js', 'defer');
      if (lang === 'pt-br') {
          addScript('/test/cdn/js/portfolio/portfolioMinecraftSearchScript.js', 'defer');
      } else if (lang === 'en-us') {
          addScript('/test/cdn/js/portfolio/portfolioUsMinecraftScript.js', 'defer');
      }
  }

  // Adicione mais condições conforme necessário
}

// Chama a função para adicionar os scripts
addPageSpecificScripts();
console.log("DOM completamente carregado e analisado");

});
