// Menu functionality + Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// FAQ Accordian functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const openItem = document.querySelector('.accordion-header[aria-expanded="true"]');
        
            // Close the currently open accordion item
            if (openItem && openItem !== header) {
                openItem.setAttribute('aria-expanded', 'false');
                openItem.nextElementSibling.classList.add('hidden');
                openItem.querySelector('svg').classList.remove('rotate-180');
            }
        
            // Toggle the clicked accordion item
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', !isExpanded);
            header.nextElementSibling.classList.toggle('hidden');
            header.querySelector('svg').classList.toggle('rotate-180');
        });
    });
});