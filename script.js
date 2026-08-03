document.addEventListener('DOMContentLoaded', () => {
    // Intro animation cleanup (optional, as CSS handles the hiding, 
    // but good practice to remove from DOM or disable interactions)
    setTimeout(() => {
        const intro = document.getElementById('intro');
        if (intro) {
            intro.style.display = 'none';
        }
    }, 3000); // Wait for animations to finish (2s delay + 1s fade)

    // Horizontal Scrolling for Works Section
    const worksContainer = document.querySelector('.horizontal-scroll-wrapper');
    if (worksContainer) {
        worksContainer.addEventListener('wheel', (evt) => {
            // Only scroll horizontally if mouse is hovering over this specific section
            evt.preventDefault();
            worksContainer.scrollLeft += evt.deltaY;
        });
    }
});
