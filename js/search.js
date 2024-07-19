document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search');
    const resetBtn = document.getElementById('reset-btn');

    searchInput.addEventListener('input', function () {
        if (searchInput.value.length > 0) {
            resetBtn.classList.remove('hide');
        } else {
            resetBtn.classList.add('hide');
        }
    });

    resetBtn.addEventListener('click', function () {
        searchInput.value = '';
        resetBtn.classList.add('hide');
    });
});