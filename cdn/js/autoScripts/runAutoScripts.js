const loadedScripts = new Set();

function loadScript(scriptUrl) {
    if (loadedScripts.has(scriptUrl)) {
        console.log(`${scriptUrl} já foi carregado.`);
        return;
    }

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = () => {
        console.log(`${scriptUrl} carregado e executado com sucesso.`);
        loadedScripts.add(scriptUrl);
    };
    script.onerror = () => {
        console.error(`Erro ao carregar o script: ${scriptUrl}`);
    };
    document.head.appendChild(script);
}

function loadAllScripts(directory) {
    fetch(directory)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const links = Array.from(doc.querySelectorAll('script'));

            links.forEach(link => {
                const href = link.getAttribute('src');
                if (href.endsWith('/')) {''
                    // Se for um diretório, chama a função recursivamente
                    loadAllScripts(directory + href);
                } else if (href.endsWith('.js')) {
                    // Se for um arquivo .js, carrega o script
                    loadScript(directory + href);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os scripts:', error);
        });
}

// Inicia o carregamento a partir do diretório raiz
loadAllScripts('/cdn/js/');