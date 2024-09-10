document.addEventListener('DOMContentLoaded', function() {
  const baseUrl = window.location.origin;
  const currentLang = document.documentElement.lang;

  // Definir substituições de links e texto
  const replacements = {
    '{portfolio2DScript}': currentLang === 'pt-br' ? '/cdn/js/portfolio/portfolio2DDesignSearchScript.js' : '/cdn/js/portfolio/us/portfolioUs2DDesignSearchScript.js',
    '{portfolioMinecraftScript}': currentLang === 'pt-br' ? '/cdn/js/portfolio/portfolioMinecraftSearchScript.js' : '/cdn/js/portfolio/portfolioUsMinecraftScript.js',
  };

  // Função para atualizar o atributo src dos elementos <script>
  function updateScripts() {
    const scripts = document.querySelectorAll('script');

    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src) {
        for (const key in replacements) {
          if (src.includes(key)) {
            const newSrc = baseUrl + replacements[key];
            script.setAttribute('src', newSrc);
            break;
          }
        }
      }
    });
  }

  // Chamar a função para atualizar os scripts
  updateScripts();
      });