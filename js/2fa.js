function moveToNext(current, nextFieldID) {
    if (current.value.length === 1) {
        document.getElementById(nextFieldID).focus();
    }
}

function validateCode() {
    var digits = [];
    for (var i = 1; i <= 6; i++) {
        var digit = document.getElementById('digit' + i).value;
        if (digit === '' || isNaN(digit)) {
            document.getElementById('error').style.display = 'block';
            return;
        }
        digits.push(digit);
    }
    document.getElementById('error').style.display = 'none';
    var code = digits.join('');
    alert("Code submitted: " + code);
}

//tooltip 2FA
document.addEventListener('DOMContentLoaded', function () {
    const continueButton = document.getElementById('continueBtn');
    const qrSection = document.getElementById('QR2FA');
    const successTooltip = document.getElementById('FA');
    const toggleButton = document.getElementById('2FAToggle');

    function hideSuccessTooltip() {
        setTimeout(() => {
            successTooltip.classList.add('hide');
        }, 1000);
    }

    continueButton.addEventListener('click', function (event) {
        event.preventDefault();
        qrSection.classList.add('hide');
        successTooltip.classList.remove('hide');
        hideSuccessTooltip();
    });

    toggleButton.addEventListener('click', function () {
        qrSection.classList.remove('hide');
        const toggleBtn = document.querySelector('#2FAToggle .toggle__btn');
        toggleBtn.classList.add('active');
    });
});