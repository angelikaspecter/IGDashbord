document.querySelectorAll('.form').forEach(form => {
    const inputs = form.querySelectorAll('.form__input');
    const customTriggers = form.querySelectorAll('.custom-select-trigger .desc');
    const button = form.querySelector('.btn');

    function checkForm() {
        let allFilled = true;

        inputs.forEach(input => {
            if (input.type === 'number') {
                if (input.value.trim() === '' || isNaN(input.value)) {
                    allFilled = false;
                }
            } else if (input.value.trim() === '') {
                allFilled = false;
            }
        });

        customTriggers.forEach(trigger => {
            if (trigger.classList.contains('custom-select-trigger--clean')) {
                allFilled = false;
            }
        });

        button.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkForm);
    });

    customTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.classList.remove('custom-select-trigger--clean');
            checkForm();
        });
    });
});