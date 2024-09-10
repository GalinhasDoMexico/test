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
  addScript('/cdn/js/mobile-menu.js', 'defer');
  addScript('/cdn/js/autoNavAndFooter.js', 'defer');
  addScript('/cdn/js/menuHref.js', 'defer');
  addScript('/cdn/js/theme-switcher.js', 'defer');
  addScript('/cdn/js/choose-language.js', 'defer');
  addScript('/cdn/js/lgbt-mode.js', 'defer');
  addScript('/cdn/js/updateVersionText.js', 'defer');

  // Adiciona scripts específicos para a página /blog/
  if (path === '/blog/') {
      addScript('/cdn/js/blog/search/blogSearchScript.js', 'defer');
      addScript('/cdn/js/blog/blogAlerts.js', 'defer');
  }

  // Adiciona scripts específicos para a página /about/
  if (path === '/br/about-me/' || path === '/us/about-me/') {
      addScript('https://www.youtube.com/iframe_api', 'defer');
      addScript('/cdn/js/playlist-player.js', 'defer');
  }

  // Adiciona scripts específicos para a página /portfolio/design-2d
  if (path === '/br/portfolio/design-2d' || path === '/us/portfolio/design-2d') {
      addScript('/cdn/js/portfolio/portfolioImageFullscreen.js', 'defer');
      if (lang === 'pt-br') {
          addScript('/cdn/js/portfolio/portfolio2DDesignSearchScript.js', 'defer');
      } else if (lang === 'en-us') {
          addScript('/cdn/js/portfolio/us/portfolioUs2DDesignSearchScript.js', 'defer');
      }
  }

  // Adiciona scripts específicos para a página /portfolio/minecraft
  if (path === '/br/portfolio/minecraft' || path === '/us/portfolio/minecraft') {
      addScript('/cdn/js/portfolio/portfolioImageFullscreen.js', 'defer');
      if (lang === 'pt-br') {
          addScript('/cdn/js/portfolio/portfolioMinecraftSearchScript.js', 'defer');
      } else if (lang === 'en-us') {
          addScript('/cdn/js/portfolio/portfolioUsMinecraftScript.js', 'defer');
      }
  }

  // Adicione mais condições conforme necessário
}

// Chama a função para adicionar os scripts
addPageSpecificScripts();
console.log("DOM completamente carregado e analisado");

});