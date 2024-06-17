document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const tagSelect = document.getElementById('tag-selector'); // Might be a typo, corrected to "tag-selector"

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

  // Get selected tag from URL parameter (if any)
  const urlParams = new URLSearchParams(window.location.search);
  const selectedTagFromUrl = urlParams.get('tags');

  // Initial rendering based on tag from URL or all posts
  let filteredPosts;
  if (selectedTagFromUrl) {
    filteredPosts = filterBlogPosts(blogPosts, '', selectedTagFromUrl);
  } else {
    filteredPosts = blogPosts; // Render all posts if no tag in URL
  }
  renderBlogPosts(filteredPosts);

  // Function to filter posts by title, description, and tags
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

  // Function to handle search form submission
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();

    // Use a variable to store the tag (if any)
    let selectedTag = tagSelect.value;

    // Check if there's a tag in the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTagFromUrl = urlParams.get('tags');

    // Prioritize the URL parameter tag if it exists
    if (selectedTagFromUrl) {
      selectedTag = selectedTagFromUrl;
    }

    const filteredPosts = filterBlogPosts(blogPosts, searchTerm, selectedTag);
    renderBlogPosts(filteredPosts);
  });

  // Function to handle tag select change
  tagSelect.addEventListener('change', function() {
    const selectedTag = tagSelect.value;

    // Update the URL parameter with the selected tag
    if (selectedTag !== '') {
      const newUrlParams = new URLSearchParams();
      newUrlParams.set('tags', selectedTag);
      history.replaceState(null, '', `?${newUrlParams.toString()}`); // Update URL without reloading
    } else {
      // Remove the tag parameter if no tag is selected
      history.replaceState(null, '', window.location.pathname); // Remove tag parameter
    }

    // Filter and render posts based on the selected tag
    const filteredPosts = filterBlogPosts(blogPosts, '', selectedTag);
    renderBlogPosts(filteredPosts);
  });
});
