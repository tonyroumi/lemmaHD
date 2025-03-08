document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isOpen = false;

    // Info toggles
    const infoToggleButtons = document.querySelectorAll('[data-info]');
    let activeItem = null;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideAndFade {
            from { opacity: 0; transform: translateX(-100%); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        .arrow-rotate {
            transform: rotate(180deg);
            transition: transform 0.3s ease;
        }
        
        .info-box {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease;
        }
        
        .info-box.active {
            max-height: 500px;
        }
        
        .nav-underline.active {
            display: block;
        }
    `;
    document.head.appendChild(style);

    // Show mobile menu with animation
    function openMobileMenu() {
        isOpen = true;
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.animation = 'slideAndFade 0.5s ease-in-out';
        
        // Add staggered animation to list items
        const listItems = mobileMenu.querySelectorAll('li');
        listItems.forEach((item, index) => {
            item.classList.add('animate-fadeIn');
            item.style.animationDelay = `${0.1 * (index + 1)}s`;
        });
        
        mobileMenuButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
    }

    // Hide mobile menu
    function closeMobileMenu() {
        isOpen = false;
        mobileMenu.classList.add('hidden');
        activeItem = null;
        
        // Reset all info boxes
        document.querySelectorAll('.info-box').forEach(box => {
            box.classList.remove('active');
            box.classList.add('hidden');
        });
        
        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.classList.remove('arrow-rotate');
        });
        
        mobileMenuButton.innerHTML = `
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="6" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="18" r="2" />
            </svg>
        `;
    }

    // Toggle info sections
    function toggleInfo(item) {
        const infoBox = document.getElementById(`${item}-info`);
        const arrow = event.currentTarget.querySelector('.arrow');
        
        if (activeItem === item) {
            // Close current item
            infoBox.classList.add('hidden');
            infoBox.classList.remove('active');
            arrow.classList.remove('arrow-rotate');
            activeItem = null;
        } else {
            // Close previous item if exists
            if (activeItem) {
                document.getElementById(`${activeItem}-info`).classList.add('hidden');
                document.getElementById(`${activeItem}-info`).classList.remove('active');
                document.querySelector(`[data-info="${activeItem}"] .arrow`).classList.remove('arrow-rotate');
            }
            
            // Open new item
            infoBox.classList.remove('hidden');
            infoBox.classList.add('active');
            arrow.classList.add('arrow-rotate');
            activeItem = item;
        }
    }

    // Event listeners
    mobileMenuButton.addEventListener('click', () => {
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    closeMenuButton.addEventListener('click', closeMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    infoToggleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.currentTarget.getAttribute('data-info');
            toggleInfo(item);
        });
    });

    // Highlight current page in navbar
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.md\\:flex li a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const linkPage = href.split('/').pop();
        
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            // We're removing all underline-related code here
            // No underlines will be applied to active links
        }
    });
});