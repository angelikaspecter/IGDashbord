document.addEventListener('DOMContentLoaded', function () {
    const popupCarouselWrap = document.querySelector('.popup__carousel--wrap');
    const posts = document.querySelectorAll('.post');
    const btnPrev = document.querySelector('.btn--prev');
    const btnNext = document.querySelector('.btn--next');

    let currentPostIndex = 0;

    function updatePosts() {
        const offset = -currentPostIndex * 100;
        posts.forEach((post, index) => {
            post.style.transform = `translateX(${offset}%)`;
            post.style.transition = 'transform 0.5s ease'; // Add transition for smooth effect
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
});