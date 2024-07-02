function populateTags() {
    const metaTag = document.querySelector('meta[name="post:tags"]');
    if (!metaTag) {
      return;
    }
  
    const tags = metaTag.getAttribute('content');
  
    const targetElements = document.querySelectorAll('h1, a');
  
    for (const targetElement of targetElements) {
      const targetText = targetElement.textContent;
      const tagsMatch = targetText.match(/\{tags\}/);
  
      if (tagsMatch) {
        targetElement.textContent = targetText.replace(/\{tags\}/, tags);
  
        if (targetElement.tagName === 'A') {
          const targetUrl = new URL(targetElement.href);
  
          targetUrl.searchParams.set('tags', tags);
  
          targetElement.href = targetUrl.toString();
        }
      }
    }
}

window.addEventListener('DOMContentLoaded', populateTags);  