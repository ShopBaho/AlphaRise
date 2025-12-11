// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Loading Animation
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);

    // Menu Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Close mobile
