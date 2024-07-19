document.addEventListener('DOMContentLoaded', function () {
    function initializePopupCarousel(popupElement) {
        const popupCarouselWrap = popupElement.querySelector('.popup__carousel--wrap');
        const posts = popupElement.querySelectorAll('.post');
        const btnPrev = popupElement.querySelector('.btn--prev');
        const btnNext = popupElement.querySelector('.btn--next');

        let currentPostIndex = 0;

        function updatePosts() {
            const offset = -currentPostIndex * 100;
            posts.forEach((post, index) => {
                post.style.transform = `translateX(${offset}%)`;
                post.style.transition = 'transform 0.5s ease';
            });
        }

        function showNextPost() {
            currentPostIndex = (currentPostIndex + 1) % posts.length;
            updatePosts();
        }

        function showPrevPost() {
            currentPostIndex = (currentPostIndex - 1 + posts.length) % posts.length;
            updatePosts();
        }

        btnNext.addEventListener('click', function () {
            console.log('Next button clicked');
            showNextPost();
        });

        btnPrev.addEventListener('click', function () {
            console.log('Previous button clicked');
            showPrevPost();
        });

        updatePosts();
    }

    const popups = document.querySelectorAll('.popup--post');
    popups.forEach(popup => {
        initializePopupCarousel(popup);
    });
});