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

    // 🐴 PONYTAIL: Simple vanilla JS text rotation and smooth box resizing
    const rotatingText = document.getElementById('rotating-text');
    const rotatingBox = document.querySelector('.rotating-box');
    if (rotatingText && rotatingBox) {
        const services = ['Modular Kitchens', 'Custom Furniture', 'Wall Design', 'Storage Solutions', 'Living Space', 'Lighting Design'];
        let currentServiceIndex = 0;
        
        // Initialize explicit width for smooth transitions
        let currentWidth = rotatingBox.offsetWidth;
        rotatingBox.style.width = currentWidth + 'px';

        setInterval(() => {
            rotatingText.classList.add('fade-out');
            setTimeout(() => {
                currentServiceIndex = (currentServiceIndex + 1) % services.length;
                rotatingText.textContent = services[currentServiceIndex];
                
                // Measure new width by briefly setting to auto
                rotatingBox.style.width = 'auto';
                const newWidth = rotatingBox.offsetWidth;
                
                // Snap back to old width
                rotatingBox.style.width = currentWidth + 'px';
                
                // Trigger reflow to apply the snap-back before transitioning
                void rotatingBox.offsetWidth; 
                
                // Transition to new width
                rotatingBox.style.width = newWidth + 'px';
                currentWidth = newWidth; // save for next iteration

                rotatingText.classList.remove('fade-out');
                rotatingText.classList.add('fade-in');
                
                // Trigger reflow to apply the fade-in class without transition
                void rotatingText.offsetWidth; 
                
                // Remove fade-in to start the transition back to normal state
                rotatingText.classList.remove('fade-in');
            }, 400); // Wait for fade-out transition
        }, 2500); // Rotation interval
    }
});
