document.addEventListener('DOMContentLoaded', function() {
  const headerElement = document.getElementById('autoNavBr');
  const footerElement = document.getElementById('autoFooterBr');
  const footerAboutMeBrElement = document.getElementById('autoFooterAboutMeBr');
  const headerUsElement = document.getElementById('autoNavUs');
  const footerUsElement = document.getElementById('autoFooterUs');
  const footerAboutMeUsElement = document.getElementById('autoFooterAboutMeUs');

  // Verificar a existência de cada elemento antes de injetar HTML
  if (headerElement) {
    const headerHTML = `
    <nav>
    <br>
    <div class="navigation-container">
    <a class="nav-settings" href="{home}">Página Inicial</a>
    <div class="dropdown">
    <a href="#" class="nav-settings">Projetos</a>
    <div class="dropdown-content">
      <a href="{projects-scripts}">Scripts</a>
      <a href="{projects-minecraft}">Minecraft</a>
      <a href="{projects-design-2d}">Design 2D</a>
    </div>
    </div>
      <a class="nav-settings" href="{blog}">Blog</a>
      <a class="nav-settings" href="{about-me}">Sobre Mim</a>
    </div>
      <a id="theme-button">
    <img class="theme-class" align="right" src="/cdn/img/flashbang.svg" id="theme-icon">
      </a>
      <div class="language-selector">
       <select id="language" onchange="changeLanguage()">
       <option value="br">PT-BR</option>
       <option value="us">EN-US</option>
       </select>
      </div>
    <div style="margin-top: 3%;" class="mobile-menu">
      <a href="javascript:void(0);" style="transition: color 0.5s ease;" class="menu-icon icon" onclick="myFunction1()">
       Menu
      </a>
    <div class="topnav">
      <div id="myLinks">
        <a class="nav-settings" href="{home}">Página Inicial</a>
        <div style="display: flex; align-items: center;">
          <div class="nav-mobile-settings-container">
          <a href="javascript:void(1);" onclick="myFunction2()" class="nav-settings" style="margin-left: 55px;">Projetos</a>
           <span href="javascript:void(1);" onclick="myFunction2()" class="footer-svg" style="padding-left: 40px; opacity: 0.7; height: 10px; width: 10px; float: left;" href="javascript:void(1);" onclick="myFunction2()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="mySubLinks">
          <a class="nav-settings" href="{projects-scripts}">Scripts</a>
          <a class="nav-settings" href="{projects-minecraft}">Minecraft</a>
          <a class="nav-settings" href="{projects-design-2d}">Design 2D</a>
        </div>
        <a class="nav-settings" href="{blog}">Blog</a>
        <a class="nav-settings" href="{about-me}">Sobre Mim</a>
      </div>
    </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    </nav>
    `;
    headerElement.innerHTML = headerHTML;
  }

  if (footerElement) {
    const footerHTML = `
    <br>
    <br>
    <br>
     <a class="nav-settings" href="{home}">Página Inicial</a>
     <div class="dropdown">
       <a href="#" class="nav-settings">Projetos</a>
       <div class="dropdown-footer dropdown-content">
           <a href="{projects-scripts}">Scripts</a>
           <a href="{projects-minecraft}">Minecraft</a>
           <a href="{projects-design-2d}">Design 2D</a>
       </div>
     </div>
   <a class="nav-settings" href="{blog}">Blog</a>
   <a class="nav-settings" href="{about-me}">Sobre Mim</a>
   <div class="rooter-social-bg">
     <br>
     <hr style="width: 30%;">
      <a href="https://twitter.com/ChickenOfMexico"><svg class="footer-svg" viewBox="0 0 576 512">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
      </svg></a>
      <a href="/us/link/youtube"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
      </svg></a>
      <a href="https://last.fm/user/ChickenOfMexico"><svg style="margin-bottom: -7px; margin-left: 3px;" class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
       <path d="M225.779 253.403l-18.823-51.007s-30.491 34.026-76.188 34.026c-40.526 0-69.224-35.199-69.224-91.497 0-72.096 36.378-97.891 72.097-97.891 51.584 0 67.997 33.411 82.111 76.205l18.823 58.593c18.813 56.894 54.021 102.609 155.399 102.609 72.701 0 122.026-22.309 122.026-80.914 0-47.49-27.007-72.097-77.418-83.898l-37.494-8.191c-25.807-5.887-33.411-16.412-33.411-34.028 0-19.908 15.808-31.713 41.615-31.713 28.186 0 43.39 10.592 45.687 35.813l58.602-7.003C504.877 21.695 468.496 0 408.693 0c-52.811 0-104.404 19.908-104.404 83.907 0 39.904 19.391 65.085 68.005 76.802l39.904 9.4c29.877 7.013 39.894 19.391 39.894 36.391 0 21.695-21.099 30.494-60.993 30.494-59.21 0-83.908-31.108-97.904-73.893l-19.391-58.593C249.297 28.211 209.998.091 132.014.091 45.791.091 0 54.593 0 147.296c0 89.096 45.697 137.202 127.914 137.202 66.201 0 97.892-31.107 97.892-31.107l-.027.009v.003z"></path>
      </svg></a>
      <hr style="width:100%;height:0.5px;border-width:0;color:var(--rooter-hr-main);background-color:var(--rooter-hr-main)">
      <p style="margin: 10px; font-size: 10px; bottom: 0;"> GalinhasDoMexico • Todos os direitos reservados <b>/</b> <a href="/transparency/log" class="version">Version 20240401</a></p>
    <br>
   </div>
    `;
    footerElement.innerHTML = footerHTML;
  }

  if (footerAboutMeBrElement) {
    const footerAboutMeBrHTML = `
   <br>
   <br>
   <br>
    <a class="nav-settings" href="{home}">Página Inicial</a>
    <div class="dropdown">
   <a href="#" class="nav-settings">Projetos</a>
   <div class="dropdown-footer dropdown-content">
       <a href="{projects-scripts}">Scripts</a>
       <a href="{projects-minecraft}">Minecraft</a>
       <a href="{projects-design-2d}">Design 2D</a>
   </div>
     </div>
     <a class="nav-settings" href="{blog}">Blog</a>
     <a class="nav-settings" href="{about-me}">Sobre Mim</a>
   <div class="rooter-social-bg">
   <br>
   <hr style="width: 30%;">
     <a href="https://twitter.com/ChickenOfMexico"><svg class="footer-svg" viewBox="0 0 576 512">
   <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
     </svg></a>
     <a href="/br/link/youtube"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
   <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
     </svg></a>
     <a href="https://last.fm/user/ChickenOfMexico"><svg style="margin-bottom: -7px; margin-left: 3px;" class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
   <path d="M225.779 253.403l-18.823-51.007s-30.491 34.026-76.188 34.026c-40.526 0-69.224-35.199-69.224-91.497 0-72.096 36.378-97.891 72.097-97.891 51.584 0 67.997 33.411 82.111 76.205l18.823 58.593c18.813 56.894 54.021 102.609 155.399 102.609 72.701 0 122.026-22.309 122.026-80.914 0-47.49-27.007-72.097-77.418-83.898l-37.494-8.191c-25.807-5.887-33.411-16.412-33.411-34.028 0-19.908 15.808-31.713 41.615-31.713 28.186 0 43.39 10.592 45.687 35.813l58.602-7.003C504.877 21.695 468.496 0 408.693 0c-52.811 0-104.404 19.908-104.404 83.907 0 39.904 19.391 65.085 68.005 76.802l39.904 9.4c29.877 7.013 39.894 19.391 39.894 36.391 0 21.695-21.099 30.494-60.993 30.494-59.21 0-83.908-31.108-97.904-73.893l-19.391-58.593C249.297 28.211 209.998.091 132.014.091 45.791.091 0 54.593 0 147.296c0 89.096 45.697 137.202 127.914 137.202 66.201 0 97.892-31.107 97.892-31.107l-.027.009v.003z"></path>
     </svg></a>
     <hr style="width:99%;height:0.5px;border-width:1;color:var(--rooter-hr-main);background-color:var(--rooter-hr-main)">
     <p style="margin: 10px; font-size: 10px; bottom: 0;"> GalinhasDoMexico • Todos os direitos reservados <b>/</b> <a href="/transparency/log" class="version">Versão 20240401</a> <a href="#gay" id="gay"><svg viewBox="0 0 122.88 107.41" style="enable-background:new 0 0 122.88 107.41; width: auto; height: 10px; margin-left: 3px;" class="footer-svg" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g>
       <path class="st0" d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"/></g></svg>
     </a></p>
   <br>
   </div>
    `;
    footerAboutMeBrElement.innerHTML = footerAboutMeBrHTML;
  }

    // -=-=-=-=-=-=-=-=-=-=-=- VERSÃO EM INGLÊS -=-=-=-=-=-=-=-=-=-=-=-
    if (headerUsElement) {
      const headerUsHTML = `
      <nav>
      <br>
      <div class="navigation-container">
       <a class="nav-settings" href="{home}">Home</a>
       <div class="dropdown">
       <a href="#" class="nav-settings">Projects</a>
       <div class="dropdown-content">
           <a href="{projects-scripts}">Scripts</a>
           <a href="{projects-minecraft}">Minecraft</a>
           <a href="{projects-design-2d}">Design 2D</a>
       </div>
     </div>
     <a class="nav-settings" href="{about-me}">About Me</a>
     </div>
     <a id="theme-button">
       <img class="theme-class" align="right" src="/cdn/img/flashbang.svg" id="theme-icon">
     </a>
     <div class="language-selector">
       <select id="language" onchange="changeLanguage()">
           <option value="us">EN-US</option>
           <option value="br">PT-BR</option>
       </select>
     </div>
     <div class="mobile-menu">
     <a href="javascript:void(0);" style="transition: color 0.5s ease;" class="menu-icon icon" onclick="myFunction1()">
       Menu
     </a>
       <div class="topnav">
         <div id="myLinks">
           <a class="nav-settings" href="{home}">Home</a>
           <div style="display: flex; align-items: center;">
             <div class="nav-mobile-settings-container">
               <a href="javascript:void(1);" onclick="myFunction2()" class="nav-settings" style="margin-left: 55px;">Projects</a>
               <span href="javascript:void(1);" onclick="myFunction2()" class="footer-svg" style="padding-left: 40px; opacity: 0.7; height: 10px; width: 10px; float: left;" href="javascript:void(1);" onclick="myFunction2()">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                   <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                 </svg>
               </span>
             </div>
           </div>
            <div id="mySubLinks">
            <a class="nav-settings" href="{projects-design-2d}">Design 2D</a>
            <a class="nav-settings" href="{projects-minecraft}">Minecraft</a>
            <a class="nav-settings" href="{projects-scripts}">Scripts</a>
            </div>
           <a class="nav-settings" href="{about-me}">About Me</a>
         </div>
       </div>
     </div>
     <br>
     <br>
     <br>
     <br>
     </nav>
      `;
      headerUsElement.innerHTML = headerUsHTML;
    }
  
    if (footerUsElement) {
      const footerUsHTML = `
      <br>
      <br>
      <br>
      <a class="nav-settings" href="{home}">Página Inicial</a>
      <div class="dropdown">
         <a href="#" class="nav-settings">Projetos</a>
         <div class="dropdown-footer dropdown-content">
             <a class="nav-settings" href="{projects-scripts}">Scripts</a>
             <a class="nav-settings" href="{projects-minecraft}">Minecraft</a>
             <a class="nav-settings" href="{projects-design-2d}">Design 2D</a>
         </div>
      </div>
     <a class="nav-settings" href="{about-me}">Sobre Mim</a>
     <div class="rooter-social-bg">
     <br>
     <hr style="width: 30%;">
     <a href="https://twitter.com/ChickenOfMexico"><svg class="footer-svg" viewBox="0 0 576 512">
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
     </svg></a>
     <a href="./link/youtube"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
     </svg></a>
     <a href="https://last.fm/user/ChickenOfMexico"><svg style="margin-bottom: -7px; margin-left: 3px;" class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M225.779 253.403l-18.823-51.007s-30.491 34.026-76.188 34.026c-40.526 0-69.224-35.199-69.224-91.497 0-72.096 36.378-97.891 72.097-97.891 51.584 0 67.997 33.411 82.111 76.205l18.823 58.593c18.813 56.894 54.021 102.609 155.399 102.609 72.701 0 122.026-22.309 122.026-80.914 0-47.49-27.007-72.097-77.418-83.898l-37.494-8.191c-25.807-5.887-33.411-16.412-33.411-34.028 0-19.908 15.808-31.713 41.615-31.713 28.186 0 43.39 10.592 45.687 35.813l58.602-7.003C504.877 21.695 468.496 0 408.693 0c-52.811 0-104.404 19.908-104.404 83.907 0 39.904 19.391 65.085 68.005 76.802l39.904 9.4c29.877 7.013 39.894 19.391 39.894 36.391 0 21.695-21.099 30.494-60.993 30.494-59.21 0-83.908-31.108-97.904-73.893l-19.391-58.593C249.297 28.211 209.998.091 132.014.091 45.791.091 0 54.593 0 147.296c0 89.096 45.697 137.202 127.914 137.202 66.201 0 97.892-31.107 97.892-31.107l-.027.009v.003z"></path>
     </svg></a>
     <hr style="width:100%;height:0.5px;border-width:0;color:var(--rooter-hr-main);background-color:var(--rooter-hr-main);transition: background-color 0.5s ease, color 0.5s ease;">
     <p style="margin: 10px; font-size: 10px; bottom: 0;"> GalinhasDoMexico • Todos os direitos reservados <b>/</b> <a href="/transparency/log" class="version">Versão 20240301</a></p>
     <br>
     </div>
      `;
      footerUsElement.innerHTML = footerUsHTML;
    }
  
    if (footerAboutMeUsElement) {
      const footerAboutMeUsHTML = `
     <br>
     <br>
     <br>
       <a class="nav-settings" href="{home}">Home</a>
       <div class="dropdown">
         <a href="#" class="nav-settings">Projects</a>
         <div class="dropdown-footer dropdown-content">
             <a href="{projects-scripts}">Scripts</a>
             <a href="{projects-minecraft}">Minecraft</a>
             <a href="{projects-design-2d}">Design 2D</a>
         </div>
       </div>
     <a class="nav-settings" href="{about-me}">About Me</a>
     <div class="rooter-social-bg">
       <br>
       <hr style="width: 30%;">
        <a href="https://twitter.com/ChickenOfMexico"><svg class="footer-svg" viewBox="0 0 576 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg></a>
        <a href="/us/link/youtube"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
        </svg></a>
        <a href="https://last.fm/user/ChickenOfMexico"><svg style="margin-bottom: -7px; margin-left: 3px;" class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
         <path d="M225.779 253.403l-18.823-51.007s-30.491 34.026-76.188 34.026c-40.526 0-69.224-35.199-69.224-91.497 0-72.096 36.378-97.891 72.097-97.891 51.584 0 67.997 33.411 82.111 76.205l18.823 58.593c18.813 56.894 54.021 102.609 155.399 102.609 72.701 0 122.026-22.309 122.026-80.914 0-47.49-27.007-72.097-77.418-83.898l-37.494-8.191c-25.807-5.887-33.411-16.412-33.411-34.028 0-19.908 15.808-31.713 41.615-31.713 28.186 0 43.39 10.592 45.687 35.813l58.602-7.003C504.877 21.695 468.496 0 408.693 0c-52.811 0-104.404 19.908-104.404 83.907 0 39.904 19.391 65.085 68.005 76.802l39.904 9.4c29.877 7.013 39.894 19.391 39.894 36.391 0 21.695-21.099 30.494-60.993 30.494-59.21 0-83.908-31.108-97.904-73.893l-19.391-58.593C249.297 28.211 209.998.091 132.014.091 45.791.091 0 54.593 0 147.296c0 89.096 45.697 137.202 127.914 137.202 66.201 0 97.892-31.107 97.892-31.107l-.027.009v.003z"></path>
        </svg></a>
        <hr style="width:100%;height:0.5px;border-width:0;color:var(--rooter-hr-main);background-color:var(--rooter-hr-main)">
        <p style="margin: 10px; font-size: 10px; bottom: 0;"> GalinhasDoMexico • All rights reserved <b>/</b> <a href="/transparency/log" class="version">Version 20240401</a> <a href="#gay" id="gay"><svg viewBox="0 0 122.88 107.41" style="enable-background:new 0 0 122.88 107.41; width: auto; height: 10px; margin-left: 3px;" class="footer-svg" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g>
         <path class="st0" d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"/></g></svg>
       </a></p>
     <br>
     </div>
      `;
      footerAboutMeUsElement.innerHTML = footerAboutMeUsHTML;
    }
});
