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

    // Auto-scrolling was removed, using CSS grid layout now
    const worksContainer = document.getElementById('works-container');
});
