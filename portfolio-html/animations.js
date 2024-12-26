
const FadeInObserver = () => {
    const fadeElements = document.querySelectorAll('[data-fade-in]');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        fadeInObserver.observe(element);
    });
};

const SlideInObserver = () => {
    const slideElements = document.querySelectorAll('[data-slide-in]');
    
    const slideInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('translate-x-0', 'opacity-100');
                entry.target.classList.remove('-translate-x-10', 'opacity-0');
                slideInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    slideElements.forEach(element => {
        element.classList.add('-translate-x-10', 'opacity-0', 'transition-all', 'duration-700', 'ease-out');
        slideInObserver.observe(element);
    });
};

const ScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-black z-50 transition-all duration-300';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
};



const MobileMenu = () => {
    const menuButton = document.querySelector('button[type="button"]');
    const mobileNav = document.createElement('div');
    mobileNav.className = 'fixed top-16 left-0 w-full bg-white border-b border-black transform transition-transform duration-300 -translate-y-full md:hidden';
    mobileNav.innerHTML = `
        <nav class="flex flex-col p-4 space-y-4">
            <a href="#about" class="text-black hover:text-gray-300 font-light">Om mig</a>
            <a href="#projects" class="text-black hover:text-gray-300 font-light">Projekt</a>
            <a href="#skills" class="text-black hover:text-gray-300 font-light">Kompetenser</a>
            <a href="#contact" class="text-black hover:text-gray-300 font-light">Kontakt</a>
        </nav>
    `;
    document.body.appendChild(mobileNav);

    let isOpen = false;
    menuButton.addEventListener('click', () => {
        isOpen = !isOpen;
        mobileNav.style.transform = isOpen ? 'translateY(0)' : 'translateY(-100%)';
    });
};

document.addEventListener('DOMContentLoaded', () => {
    FadeInObserver();
    SlideInObserver();
    ScrollProgress();
    MobileMenu();
});