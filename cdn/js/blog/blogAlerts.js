function checkLanguageAndDevice() {
// Verificar o idioma do navegador
const navigatorLanguage = navigator.language || navigator.userLanguage;
const isPortugueseBR = navigatorLanguage.includes('pt-BR');
  
    // Verificar se é um dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Mensagens para cada caso
    const messages = {
      ptBRMobile: 'O Blog não foi otimizado para celulares. Continue por sua conta e risco.',
      otherMobile: 'The Blog has not been optimized for mobile devices. Continue at your own risk!\n\nOnly available in Portuguese - Brazil (PT-BR)',
      otherDesktop: 'The Blog is only available in Portuguese - Brazil (PT-BR)'
    };
  
    // Definir a mensagem a ser exibida
    let messageKey;
    if (isPortugueseBR) {
      messageKey = isMobile ? 'ptBRMobile' : '';
    } else {
      messageKey = isMobile ? 'otherMobile' : 'otherDesktop';
    }
  
    if (messageKey) { // Exiba apenas se houver mensagem (messageKey diferente de vazio)
        alert(messages[messageKey]);
      }
  }
  
// Executar a função quando a página carregar
window.addEventListener('load', checkLanguageAndDevice);
  