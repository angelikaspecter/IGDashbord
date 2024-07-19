document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const postImg = post.querySelector('.post__img-info');
        const popupPostFooter = post.querySelector('.post--mobile');

        postImg.addEventListener('click', () => {
            if (window.matchMedia('(orientation: portrait) and (max-width: 374.98px)').matches) {
                popupPostFooter.classList.toggle('hide');
            }
        });
    });
});