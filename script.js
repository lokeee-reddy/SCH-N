document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    
    // Check if intro has been played this session
    if (!sessionStorage.getItem('introPlayed')) {
        // Play intro
        setTimeout(() => {
            if (intro) {
                intro.style.display = 'none';
            }
            sessionStorage.setItem('introPlayed', 'true');
        }, 3000);
    } else {
        // Skip intro immediately
        if (intro) {
            intro.style.display = 'none';
        }
    }

    // Auto-scrolling is now handled by CSS animation for smoother performance
    // We duplicate the work items so the scroll animation is seamless
    const worksContainer = document.getElementById('works-container');
    if (worksContainer) {
        const items = worksContainer.innerHTML;
        worksContainer.innerHTML += items; // Duplicate for infinite scroll effect
    }
});
