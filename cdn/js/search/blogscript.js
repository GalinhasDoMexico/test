document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const tagSelect = document.getElementById('tag-select');

  // Array of blog posts (replace with your own data)
  const blogPosts = [
    {
      title: 'Título do Primeiro Post',
      description: 'Descrição breve do primeiro post.',
      date: 'Postado dia: Data',
      url: 'blog/post1',
      tags: ['Opinião', 'Tecnologia']
    },
    {
      title: 'Título do Segundo Post',
      description: 'Descrição breve do segundo post.',
      date: 'Postado dia: Data',
      url: 'blog/post2',
      tags: ['Teste', 'Tecnologia']
    },
  ];

  function renderBlogPosts(posts) {
    blogPostsContainer.innerHTML = '';
    posts.forEach(function(post) {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        <p style="opacity: 0.5">${post.date}</p>
        <div class="tags">${post.tags.map(tag => `<span>${tag}</span>`).join(' ')}</div>
        <a href="${post.url}">Leia mais</a>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const selectedTagFromUrl = urlParams.get('tags');

  let filteredPosts;
  if (selectedTagFromUrl) {
    filteredPosts = filterBlogPosts(blogPosts, '', selectedTagFromUrl);
  } else {
    filteredPosts = blogPosts;
  }
  renderBlogPosts(filteredPosts);

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTag = tagSelect.value;
    const filteredPosts = filterBlogPosts(blogPosts, searchTerm, selectedTag);
    renderBlogPosts(filteredPosts);
  });

  function filterBlogPosts(posts, searchTerm, selectedTag) {
    let filteredPosts = posts;

    if (selectedTag !== '') {
      filteredPosts = filteredPosts.filter(function(post) {
        return post.tags.includes(selectedTag);
      });
    }


    if (searchTerm !== '' || selectedTag === '') {
      filteredPosts = filteredPosts.filter(function(post) {
        const titleMatch = post.title.toLowerCase().includes(searchTerm);
        const descriptionMatch = post.description.toLowerCase().includes(searchTerm);
        const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return titleMatch || descriptionMatch || tagsMatch;
      });
    }

    return filteredPosts;
  }

  tagSelect.addEventListener('change', function() {
    const selectedTag = tagSelect.value;
    const filteredPosts = filterBlogPosts(blogPosts, '', selectedTag);
    renderBlogPosts(filteredPosts);
  });
});