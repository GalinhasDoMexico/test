document.addEventListener('DOMContentLoaded', function() {
    // Função para obter as informações da página atual
    function getPageInfo() {
      const url = window.location.href;
      const title = document.title;
      return { url, title };
    }
  
    // Função para gerar o HTML do link dinâmico
    function generateDynamicLink(pageInfo) {
      const linkHTML = `<a><b href="${pageInfo.url}" style="font-size: 14px" class="title">< Voltar para ${pageInfo.title}</b></a>`;
      return linkHTML;
    }
  
    // Função para recuperar dados do localStorage
    function getFromLocalStorage(key) {
      const dataString = localStorage.getItem(key);
      return dataString ? JSON.parse(dataString) : null;
    }
  
    // Função para salvar dados no localStorage
    function saveToLocalStorage(pageInfo) {
      localStorage.setItem('pageInfo', JSON.stringify(pageInfo));
    }
  
    // Função para substituir o texto e salvar no localStorage
    function replaceTextAndSave() {
      const pageInfo = getPageInfo();
      const linkContainer = document.querySelector('[id="dinamicback"]'); // Substitua por seu seletor real
  
      if (linkContainer) {
        const linkHTML = generateDynamicLink(pageInfo);
        linkContainer.innerHTML = linkHTML; // Substitui o texto
  
        // Verificar se a página atual é diferente da página salva no localStorage
        const storedPageInfo = getFromLocalStorage('pageInfo');
        if (!storedPageInfo || storedPageInfo.url !== pageInfo.url) {
          saveToLocalStorage(pageInfo); // Salva as informações no localStorage
        }
      } else {
        console.error('Elemento de destino para o link não encontrado.');
      }
    }
  
    // Executar a função na primeira carga da página
    replaceTextAndSave();
  
    // Atualizar o link dinâmico na mudança de URL (opcional)
    window.addEventListener('popstate', function(event) {
      replaceTextAndSave();
    });
});  