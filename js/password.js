document.addEventListener('DOMContentLoaded', function () {
    // Найти все кнопки "show" и "hide"
    const showButtons = document.querySelectorAll('.form__btn--show');
    const hideButtons = document.querySelectorAll('.form__btn--hide');

    showButtons.forEach(showButton => {
        showButton.addEventListener('click', function (event) {
            event.preventDefault();
            const passwordInput = this.previousElementSibling;
            const hideButton = this.nextElementSibling;

            passwordInput.type = 'text';

            this.classList.add('hide');
            hideButton.classList.remove('hide');
        });
    });

    hideButtons.forEach(hideButton => {
        hideButton.addEventListener('click', function (event) {
            event.preventDefault();

            const passwordInput = this.previousElementSibling.previousElementSibling;
            const showButton = this.previousElementSibling;

            passwordInput.type = 'password';

            this.classList.add('hide');
            showButton.classList.remove('hide');
        });
    });
});