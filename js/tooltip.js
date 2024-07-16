document.addEventListener('DOMContentLoaded', () => {
    const tooltipTarget = document.querySelector('.tooltip__target');
    const tooltipContent = document.querySelector('.tooltip__content');

    tooltipTarget.addEventListener('mouseenter', () => {
        tooltipContent.style.visibility = 'visible';
        tooltipContent.style.opacity = '1';
    });

    tooltipTarget.addEventListener('mouseleave', () => {
        tooltipContent.style.visibility = 'hidden';
        tooltipContent.style.opacity = '0';
    });
});

// tooltip success
document.addEventListener('DOMContentLoaded', function () {
    const changePasswordButton = document.getElementById('changePass');
    const popup = document.getElementById('changePasswordPopup');
    const successTooltip = document.getElementById('passwordSuccessChanged');;

    function hideSuccessTooltip() {
        setTimeout(() => {
            successTooltip.classList.add('hide');
        }, 1000);
    }

    changePasswordButton.addEventListener('click', function (event) {
        event.preventDefault();
        popup.classList.add('hide');
        successTooltip.classList.remove('hide');

        hideSuccessTooltip();
    });
});