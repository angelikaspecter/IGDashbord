document.addEventListener('DOMContentLoaded', function () {
    // Найти все кнопки "show" и "hide"
    const showButtons = document.querySelectorAll('.form__btn--show');
    const hideButtons = document.querySelectorAll('.form__btn--hide');

    showButtons.forEach(showButton => {
        showButton.addEventListener('click', function (event) {
            event.preventDefault();
            // Найти соответствующее поле пароля и кнопку "hide"
            const passwordInput = this.previousElementSibling;
            const hideButton = this.nextElementSibling;

            // Показать пароль
            passwordInput.type = 'text';

            // Добавить класс 'hide' к кнопке "show" и убрать его с кнопки "hide"
            this.classList.add('hide');
            hideButton.classList.remove('hide');
        });
    });

    hideButtons.forEach(hideButton => {
        hideButton.addEventListener('click', function (event) {
            event.preventDefault();
            // Найти соответствующее поле пароля и кнопку "show"
            const passwordInput = this.previousElementSibling.previousElementSibling;
            const showButton = this.previousElementSibling;

            // Скрыть пароль
            passwordInput.type = 'password';

            // Добавить класс 'hide' к кнопке "hide" и убрать его с кнопки "show"
            this.classList.add('hide');
            showButton.classList.remove('hide');
        });
    });
});