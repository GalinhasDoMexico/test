document.addEventListener('DOMContentLoaded', function() {
    // Obtenha a URL da página atual
    const currentPageUrl = window.location.href;
  
    // Verifique se a URL contém "/us/"
    if (currentPageUrl.includes("/us/")) {
      updateVersion("Version 20240423", ".version");
    } else if (currentPageUrl.includes("/br/")) {
      updateVersion("Versão 20240423", ".version");
    } else if (currentPageUrl.includes("/transparency/") && currentPageUrl.includes("/docs/")) {
      updateVersion("Versão 0.0.1 (Docs)", ".versiondocs");
      updateVersion("Versão 20240521 (Website)", ".version");
    } else if (currentPageUrl.includes("/transparency/")) {
      updateVersion("Versão 20240521 (Website)", ".version");
    }
  });
  
  function updateVersion(newText, className) {
    // Selecione o elemento com a classe especificada
    const versionText = document.querySelectorAll(className); // Seleciona todos os elementos com a classe
  
    // Verifique se pelo menos um elemento foi encontrado
    if (versionText.length > 0) {
      // Se sim, atualize o texto de todos os elementos
      versionText.forEach(element => element.textContent = newText);
    }
  }  