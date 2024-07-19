document.addEventListener('DOMContentLoaded', () => {
    const carouselWrap = document.getElementById('carouselWrap');
    const items = document.querySelectorAll('.card__carousel--item');
    const prevButton = document.getElementById('btnPrev');
    const nextButton = document.getElementById('btnNext');
    let currentIndex = 0;

    function updateCarousel() {
        const visibleItems = Math.floor(carouselWrap.parentElement.offsetWidth / items[0].offsetWidth);
        const maxIndex = items.length - visibleItems;
        const itemWidth = items[0].offsetWidth + 16;
        carouselWrap.style.transform = `translateX(-${Math.min(currentIndex, maxIndex) * itemWidth}px)`;

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        const visibleItems = Math.floor(carouselWrap.parentElement.offsetWidth / items[0].offsetWidth);
        const maxIndex = items.length - visibleItems;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel();
    window.addEventListener('resize', updateCarousel);
});