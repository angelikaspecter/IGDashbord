document.getElementById('resendCodeBtn').addEventListener('click', function () {
    const button = this;
    const counter = button.querySelector('.resentCount');
    let countdown = 59;

    counter.classList.remove('hide');
    button.setAttribute('disabled', true);

    const interval = setInterval(function () {
        counter.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            counter.classList.add('hide');
            button.removeAttribute('disabled');
        }
        countdown--;
    }, 1000);
});