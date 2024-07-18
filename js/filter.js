document.addEventListener('DOMContentLoaded', function () {
    const rangeMin = document.getElementById('range-min');
    const rangeMax = document.getElementById('range-max');
    const rangeTrack = document.querySelector('.range-track');

    function updateTrack() {
        const min = parseInt(rangeMin.value);
        const max = parseInt(rangeMax.value);
        const minPercent = ((min - 1) / 19) * 100;
        const maxPercent = ((max - 1) / 19) * 100;
        rangeTrack.style.background = `linear-gradient(to right, transparent ${minPercent}%, var(--accident-primary) ${minPercent}%, var(--accident-primary) ${maxPercent}%, transparent ${maxPercent}%)`;
    }

    rangeMin.addEventListener('input', function () {
        if (parseInt(rangeMin.value) >= parseInt(rangeMax.value)) {
            rangeMin.value = parseInt(rangeMax.value) - 1;
        }
        updateTrack();
    });

    rangeMax.addEventListener('input', function () {
        if (parseInt(rangeMax.value) <= parseInt(rangeMin.value)) {
            rangeMax.value = parseInt(rangeMin.value) + 1;
        }
        updateTrack();
    });

    // Initial update
    updateTrack();
});
