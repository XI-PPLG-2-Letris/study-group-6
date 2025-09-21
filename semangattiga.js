document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const rey = Array.from(track.children);
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentSlide = 0;
    let autoSlideInterval;

    rey.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = Array.from(indicatorsContainer.children);
    const updateCarousel = (targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide * slideWidth + 'px)';
        updateIndicators(targetSlide);
    };

    
    const updateIndicators = (targetSlide) => {
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[targetSlide].classList.add('active');
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentSlide++;
            if (currentSlide >= rey.length) {
                currentSlide = 0;
            }
            updateCarousel(currentSlide);
        }, 3000); 
    };
    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoSlide();
            currentSlide = index;
            updateCarousel(currentSlide);
            startAutoSlide();
        });
    });

    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    
    startAutoSlide();
});