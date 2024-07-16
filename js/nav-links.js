document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            toggleIcons(link, true);
        });

        link.addEventListener('mouseleave', function () {
            toggleIcons(link, false);
        });

        link.addEventListener('click', function () {
            navLinks.forEach(l => {
                l.classList.remove('active');
                toggleIcons(l, false);
            });
            link.classList.add('active');
            toggleIcons(link, true);
        });
    });

    function toggleIcons(link, hover) {
        const classicIcon = link.querySelector('.nav__icon--classic');
        const activeIcon = link.querySelector('.nav__icon--active');

        if (hover) {
            classicIcon.classList.add('hide');
            activeIcon.classList.remove('hide');
        } else if (!link.classList.contains('active')) {
            classicIcon.classList.remove('hide');
            activeIcon.classList.add('hide');
        }
    }
});