document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(function (toggle) {
        const offText = toggle.querySelector('.off');
        const onText = toggle.querySelector('.on');
        const toggleBtn = toggle.querySelector('.toggle__btn');

        toggle.addEventListener('click', function () {
            offText.classList.toggle('hide');
            onText.classList.toggle('hide');
            toggleBtn.classList.toggle('active');
        });
    });
});