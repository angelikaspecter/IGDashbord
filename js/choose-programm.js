document.addEventListener('DOMContentLoaded', (event) => {
    const programWraps = document.querySelectorAll('.program__wrap');

    programWraps.forEach((wrap) => {
        wrap.addEventListener('click', () => {
            programWraps.forEach((w) => w.classList.remove('active'));

            wrap.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem('popupClosed')) {
        setTimeout(function () {
            document.getElementById('chooseProgram').classList.remove('hide');
        }, 2000);

        document.querySelector('#chooseProgram .close-btn').addEventListener('click', function () {
            document.getElementById('chooseProgram').classList.add('hide');
            localStorage.setItem('popupClosed', 'true');
        });
    }
});