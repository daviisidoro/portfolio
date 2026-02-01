// PRELOADER
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('hidden');
        setTimeout(() => preloader.style.display = 'none', 500);
    }, 2500);
});

// MENU MOBILE
const menuBtn = document.querySelector('.menu-btn');
const closeMenu = document.querySelector('.close-menu');
const mobileOverlay = document.querySelector('.mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileOverlay.classList.add('active');
    });
}

if(closeMenu) {
    closeMenu.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });
});

// CURSOR (Desktop Only)
if (window.matchMedia("(hover: hover)").matches) {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    
    window.addEventListener("mousemove", function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.animate({
            left: `${posX}px`, top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    document.querySelectorAll('a, .overlay-btn, .menu-btn, .close-menu').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '80px';
            cursorOutline.style.height = '80px';
            cursorOutline.style.backgroundColor = 'rgba(255,255,255,0.1)';
        });
        link.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
}

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-scroll').forEach(el => observer.observe(el));