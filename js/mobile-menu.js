document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.nav__menu');
    const openMenuButton = document.getElementById('openMenu');
    const closeMenuButton = document.getElementById('closeMenu');

    openMenuButton.addEventListener('click', function () {
        navMenu.classList.remove('hide');
        openMenuButton.classList.add('hide');
        closeMenuButton.classList.remove('hide');
    });

    closeMenuButton.addEventListener('click', function () {
        navMenu.classList.add('hide');
        openMenuButton.classList.remove('hide');
        closeMenuButton.classList.add('hide');
    });
});