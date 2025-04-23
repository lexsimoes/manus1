// Tab functionality
function openTab(evt, tabId) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove active class from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the specific tab content
    document.getElementById(tabId).classList.add("active");
    
    // Add active class to the button that opened the tab
    evt.currentTarget.classList.add("active");
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Mobile menu toggle
    const mobileToggle = document.createElement('div');
    mobileToggle.className = 'mobile-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    
    if (window.innerWidth <= 768) {
        nav.appendChild(mobileToggle);
        
        mobileToggle.addEventListener('click', function() {
            navUl.classList.toggle('show');
            this.innerHTML = navUl.classList.contains('show') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
    }
    
    // Add active class to nav links based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`nav ul li a[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`nav ul li a[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('.card, .product-card, .rec-product');
    
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements with animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .product-card, .rec-product');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation
    setTimeout(function() {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});
