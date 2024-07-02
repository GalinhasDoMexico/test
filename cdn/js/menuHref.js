document.addEventListener('DOMContentLoaded', function() {
  const baseUrl = window.location.origin;
  const currentPath = window.location.pathname;

  // Obter o valor do atributo lang
  const currentLang = document.documentElement.lang;
  let currentHome = currentLang === 'pt-br' ? '/br/' : '/us/';

  // Definir substituições de links com base em segmentos de caminho
  const linkReplacements = {
    '{home}': currentHome,
    '{projects-scripts}': currentLang === 'pt-br' ? '/br/projects/scripts' : '/us/projects/scripts',
    '{projects-minecraft}': currentLang === 'pt-br' ? '/br/projects/minecraft' : '/us/projects/minecraft',
    '{projects-design-2d}': currentLang === 'pt-br' ? '/br/projects/design-2d' : '/us/projects/design-2d',
    '{blog}': currentPath.startsWith('/blog/') ? '/blog/' : (currentLang === 'pt-br' ? '/blog/' : '/blog/'),
    '{about-me}': currentLang === 'pt-br' ? '/br/about-me' : '/us/about-me'
  };

  // Função para atualizar atributos href dos links de navegação
  function updateLinkHrefs() {
    const navigationLinks = document.querySelectorAll('nav a, footer a');
    navigationLinks.forEach(link => {
      const originalHref = link.getAttribute('href');
      if (originalHref && originalHref.includes('{')) { // Verificar se o href contém um placeholder
        for (const key in linkReplacements) {
          if (originalHref.includes(key)) {
            const replacementValue = linkReplacements[key];
            const newHref = originalHref.replace(key, baseUrl + replacementValue);
            link.setAttribute('href', newHref);
            break; // Sair do loop após a primeira substituição
          }
        }
      }
    });
  }

  // Função para adicionar eventos de clique aos links e alternar classes de navegação
  function addClickEvents() {
    const navigationLinks = document.querySelectorAll('nav a, footer a');
    navigationLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        navigationLinks.forEach(l => l.classList.remove('nav-active'));
        e.target.classList.add('nav-active');
      });
    });
  }

  // Atualizar os atributos href dos links de navegação
  updateLinkHrefs();

  // Adicionar eventos de clique aos links para alternar classes de navegação
  addClickEvents();

  // Atualizar a variável currentHome ao mudar de página
  window.addEventListener('popstate', function() {
    currentLang = document.documentElement.lang;
    currentHome = currentLang === 'pt-br' ? '/br/' : '/us/';

    // Atualizar os links de navegação com o novo valor de {home}
    const navigationLinks = document.querySelectorAll('nav a, footer a');
    navigationLinks.forEach(link => {
      const originalHref = link.getAttribute('href');
      if (originalHref && originalHref.includes('{home}')) {
        const newHref = originalHref.replace('{home}', currentHome);
        link.setAttribute('href', newHref);
      }
    });
  });
});