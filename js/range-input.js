document.addEventListener('DOMContentLoaded', function () {
    const rangeInput = document.getElementById('reinvest');
    const ticks = document.querySelectorAll('.form__range-tick');
    const rangeFill = document.getElementById('range-fill');

    function updateTicksAndFill() {
        ticks.forEach(tick => {
            tick.classList.remove('active');
            if (parseInt(tick.dataset.value) === parseInt(rangeInput.value)) {
                tick.classList.add('active');
            }
        });
        const percentage = (rangeInput.value / rangeInput.max) * 100;
        rangeFill.style.width = `${percentage}%`;
    }

    rangeInput.addEventListener('input', updateTicksAndFill);

    updateTicksAndFill();
});