// ==================== DARK MODE ==================== 
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeToggle(savedTheme);

themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

function updateThemeToggle(theme) {
    themeToggle.checked = theme === 'dark';
}

// ==================== MOBILE MENU ==================== 
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLLING ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Add reveal class to cards and boxes
document.querySelectorAll('.cake-card, .feature-box, .featured-card, .testimonial-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ==================== MENU CATEGORY FILTER ==================== 
const categoryBtns = document.querySelectorAll('.category-btn');
const cakeCards = document.querySelectorAll('.cake-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        const selectedCategory = btn.getAttribute('data-category');
        cakeCards.forEach(card => {
            if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ==================== GALLERY FILTER ==================== 
const galleryFilters = document.querySelectorAll('.gallery-filter');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Update active filter button
        galleryFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        // Filter gallery items
        const selectedFilter = filter.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (selectedFilter === 'all' || item.getAttribute('data-filter') === selectedFilter) {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.classList.add('hidden');
                item.style.opacity = '0';
            }
        });
    });
});

// ==================== FORM VALIDATION & SUBMISSION ==================== 
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous messages
    formMessage.className = 'form-message';
    formMessage.textContent = '';

    // Validate form
    let isValid = true;
    const formGroups = document.querySelectorAll('.form-group');

    formGroups.forEach(group => {
        group.classList.remove('error');
        const input = group.querySelector('input, select, textarea');
        
        if (input && !input.value.trim()) {
            group.classList.add('error');
            isValid = false;
        } else if (input && input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                group.classList.add('error');
                isValid = false;
            }
        } else if (input && input.type === 'tel') {
            const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
            if (!phoneRegex.test(input.value)) {
                group.classList.add('error');
                isValid = false;
            }
        } else if (input && input.type === 'date') {
            const selectedDate = new Date(input.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                group.classList.add('error');
                isValid = false;
            }
        }
    });

    if (isValid) {
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = '✓ Thank you! We\'ve received your enquiry. We\'ll be in touch within 24 hours to confirm your cake details.';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.style.opacity = '1';
            }, 300);
        }, 5000);
    } else {
        // Show error message
        formMessage.className = 'form-message error';
        formMessage.textContent = '✗ Please check all fields and try again.';
    }
});

// ==================== HAMBURGER MENU ANIMATION ==================== 
const menuBtn = document.getElementById('mobileMenuBtn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menuBtn.style.opacity = menuOpen ? '0.7' : '1';
});

// Transition styles for cards
const style = document.createElement('style');
style.textContent = `
    .cake-card {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);
