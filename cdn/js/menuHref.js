document.addEventListener('DOMContentLoaded', function() {
  const baseUrl = window.location.origin;
  const currentPath = window.location.pathname;
  let currentHome = window.location.pathname === '/' || window.location.pathname.startsWith('/br/') ? '/br/' : '/us/';

  // Definir substituições de links com base em segmentos de caminho
  const linkReplacements = {
    '{home}': currentHome, // Utilizar a variável currentHome
    '{projects-scripts}': currentPath.startsWith('/br/') ? '/br/projects/scripts' : '/us/projects/scripts', // Ajuste conforme necessário
    '{projects-minecraft}': currentPath.startsWith('/br/') ? '/br/projects/minecraft' : '/us/projects/minecraft', // Ajuste conforme necessário
    '{projects-design-2d}': currentPath.startsWith('/br/') ? '/br/projects/design-2d' : '/us/projects/design-2d', // Ajuste conforme necessário
    '{blog}': currentPath.startsWith('/br/') ? '/br/blog' : '/us/blog', // Ajuste conforme necessário (se o blog não estiver na raiz)
    '{about-me}': currentPath.startsWith('/br/') ? '/br/about-me' : '/us/about-me' // Ajuste conforme necessário (se about-me não estiver na raiz)
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
    currentHome = window.location.pathname === '/' || window.location.pathname.startsWith('/br/') ? '/br/' : '/us/';

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