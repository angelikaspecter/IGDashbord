document.getElementById('emailCode').addEventListener('click', function (event) {
    event.preventDefault();
    this.classList.add('hide');
    document.getElementById('resendCode').classList.remove('hide');
    startCountdown();
});

function startCountdown() {
    var count = 59;
    var resendCountElement = document.getElementById('resentCount');
    resendCountElement.textContent = count;

    var countdownInterval = setInterval(function () {
        count--;
        resendCountElement.textContent = count;

        if (count <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('resendCode').classList.add('hide');
            document.getElementById('emailCode').classList.remove('hide');
        }
    }, 1000);
}