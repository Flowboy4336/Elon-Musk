document.addEventListener("DOMContentLoaded", () => {
    
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    // 1. SHOW PRELOADER FOR 1.5 SECONDS, THEN REVEAL SITE
    setTimeout(() => {
        preloader.classList.add("hidden");
        mainContent.classList.add("show");
        setTimeout(initAnimations, 500); 
    }, 1500); 

    // 2. SCROLL ANIMATIONS
    function initAnimations() {
        const faders = document.querySelectorAll('.fade-in');
        const appearOptions = { threshold: 0.1 };
        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            });
        }, appearOptions);
        faders.forEach(fader => appearOnScroll.observe(fader));
    }
});