document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('closeToast').addEventListener('click', function () {
        document.querySelector('.notification--toast').classList.add('hide');
    });
});
