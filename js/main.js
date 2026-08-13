document.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch('header.html')
    .then(response => {
      if (!response.ok) throw new Error('Header file not found');
      return response.text();
    })
    .then(data => {
      document.getElementById('header-container').innerHTML = data;
      
      // Set active nav link based on current URL
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('#header-container .nav-link');
      
      navLinks.forEach(link => {
        link.classList.remove('active'); // Remove default active class
        const href = link.getAttribute('href');
        
        // Match current path, or default to Home if on index.html
        if (href === currentPath || (currentPath === 'index.html' && (href === '#' || href === 'index.html') && link.textContent.trim() === 'Home')) {
          link.classList.add('active');
        }
      });
    })
    .catch(error => console.error('Error loading header:', error));

  // Load Footer
  fetch('footer.html')
    .then(response => {
      if (!response.ok) throw new Error('Footer file not found');
      return response.text();
    })
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});
