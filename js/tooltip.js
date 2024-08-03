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

document.addEventListener('DOMContentLoaded', () => {
    // Функция для обновления уровня в элементе с id="lvl"
    function updateLevel() {
        // Найти все элементы с классом tooltip__lvl-wrap и активный элемент
        const levels = document.querySelectorAll('.tooltip__lvl-wrap');
        let currentLevel = 1; // Уровень по умолчанию, если нет активного элемента

        // Определить текущий уровень
        levels.forEach((level, index) => {
            if (level.classList.contains('active')) {
                currentLevel = index + 1; // Поскольку индексы начинаются с 0, добавляем 1
            }
        });

        // Обновить значение в элементе с id="lvl"
        document.getElementById('lvl').textContent = currentLevel;
    }

    // Изначально обновить уровень
    updateLevel();

    // Обработчик событий для изменения активного уровня
    document.querySelector('.career__income-type--line').addEventListener('click', (event) => {
        const clickedLevel = event.target.closest('.tooltip__lvl-wrap');

        if (clickedLevel) {
            // Определить индекс нажатого уровня
            const levels = Array.from(document.querySelectorAll('.tooltip__lvl-wrap'));
            const clickedIndex = levels.indexOf(clickedLevel);

            // Установить или удалить класс active у всех уровней в зависимости от состояния нажатого уровня
            levels.forEach((level, index) => {
                if (index <= clickedIndex) {
                    level.classList.add('active');
                } else {
                    level.classList.remove('active');
                }
            });

            // Обновить уровень после изменения
            updateLevel();
        }
    });

    // Обработчики для отображения подсказок при наведении на весь элемент .tooltip
    document.querySelectorAll('.tooltip').forEach(tooltip => {
        const lvl = tooltip.querySelector('.tooltip__lvl');

        tooltip.addEventListener('mouseenter', () => {
            lvl.classList.add('visible');
        });

        tooltip.addEventListener('mouseleave', () => {
            lvl.classList.remove('visible');
        });
    });
});
