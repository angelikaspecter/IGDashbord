document.addEventListener('DOMContentLoaded', function () {
    const levelData = {
        1: [
            [7, 0, 0],
            [2, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 0],  // 5 столбик
            [0, 0, 0],  // 6 столбик
            [0, 0, 0],  // 7 столбик
            [0, 0, 0],  // 8 столбик
            [0, 0, 0],  // 9 столбик
            [0, 0, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        2: [
            [7, 0, 0],
            [2, 0, 1],
            [1, 0, 2],
            [1, 0, 1],
            [0, 1, 0],  // 5 столбик
            [0, 0, 0],  // 6 столбик
            [0, 0, 0],  // 7 столбик
            [0, 0, 0],  // 8 столбик
            [0, 0, 0],  // 9 столбик
            [0, 0, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        3: [
            [7, 0, 1],
            [2, 0, 2],
            [1, 0, 2],
            [1, 0, 1],
            [0, 1, 1],  // 5 столбик
            [0, 1, 0],  // 6 столбик
            [0, 0, 0],  // 7 столбик
            [0, 0, 0],  // 8 столбик
            [0, 0, 0],  // 9 столбик
            [0, 0, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        4: [
            [7, 0, 1],
            [2, 0, 2],
            [1, 0, 2],
            [1, 0, 2],
            [0, 1, 1],  // 5 столбик
            [0, 1, 1],  // 6 столбик
            [0, 1, 0],  // 7 столбик
            [0, 1, 0],  // 8 столбик
            [0, 0, 0],  // 9 столбик
            [0, 0, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        5: [
            [7, 0, 1],
            [2, 0, 2],
            [1, 0, 3],
            [1, 0, 2],
            [0, 1, 2],  // 5 столбик
            [0, 1, 1],  // 6 столбик
            [0, 1, 0],  // 7 столбик
            [0, 1, 0],  // 8 столбик
            [0, 1, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        6: [
            [7, 0, 1],
            [2, 0, 3],
            [1, 0, 3],
            [1, 0, 1],
            [0, 1, 2],  // 5 столбик
            [0, 1, 1],  // 6 столбик
            [0, 1, 1],  // 7 столбик
            [0, 1, 0],  // 8 столбик
            [0, 1, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        7: [
            [7, 0, 2],
            [2, 0, 3],
            [1, 0, 3],
            [1, 0, 2],
            [0, 1, 2],  // 5 столбик
            [0, 1, 1],  // 6 столбик
            [0, 1, 1],  // 7 столбик
            [0, 1, 1],  // 8 столбик
            [0, 1, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 1, 0],  // 13 столбик
            [0, 1, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        8: [
            [7, 0, 2],
            [2, 0, 3],
            [1, 0, 3],
            [1, 0, 2],
            [0, 1, 2],  // 5 столбик
            [0, 1, 2],  // 6 столбик
            [0, 1, 1],  // 7 столбик
            [0, 1, 1],  // 8 столбик
            [0, 1, 1],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 1, 0],  // 13 столбик
            [0, 1, 0],  // 14 столбик
            [0, 1, 0],  // 15 столбик
            [0, 1, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        9: [
            [7, 0, 3],
            [2, 0, 3],
            [1, 0, 3],
            [1, 0, 3],
            [0, 1, 2],  // 5 столбик
            [0, 1, 2],  // 6 столбик
            [0, 1, 1],  // 7 столбик
            [0, 1, 1],  // 8 столбик
            [0, 1, 1],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 1, 0],  // 13 столбик
            [0, 1, 0],  // 14 столбик
            [0, 1, 0],  // 15 столбик
            [0, 1, 0],  // 16 столбик
            [0, 1, 0],  // 17 столбик
            [0, 1, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        10: [
            [7, 0, 3],
            [2, 0, 4],
            [1, 0, 4],
            [1, 0, 3],
            [0, 1, 3],  // 5 столбик
            [0, 1, 2],  // 6 столбик
            [0, 1, 2],  // 7 столбик
            [0, 1, 1],  // 8 столбик
            [0, 1, 1],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 1, 0],  // 13 столбик
            [0, 1, 0],  // 14 столбик
            [0, 1, 0],  // 15 столбик
            [0, 1, 0],  // 16 столбик
            [0, 1, 0],  // 17 столбик
            [0, 1, 0],  // 18 столбик
            [0, 1, 0],  // 19 столбик
            [0, 1, 0]   // 20 столбик
        ]
    };

    const chartData = {
        1: [
            [7, 0, 0],
            [2, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 0],  // 5 столбик
            [0, 0, 0],  // 6 столбик
            [0, 0, 0],  // 7 столбик
            [0, 0, 0],  // 8 столбик
            [0, 0, 0],  // 9 столбик
            [0, 0, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        2: [
            [7, 0, 0],
            [3, 0, 0],
            [2, 0, 0],
            [2, 0, 0],
            [0, 1, 0],  // 5 столбик
            [0, 0, 0],  // 6 столбик
            [0, 0, 0],  // 7 столбик
            [0, 0, 0],  // 8 столбик
            [0, 0, 0],  // 9 столбик
            [0, 0, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        3: [
            [8, 0, 0],
            [4, 0, 0],
            [3, 0, 0],
            [2, 0, 0],
            [0, 2, 0],  // 5 столбик
            [0, 1, 0],  // 6 столбик
            [0, 0, 0],  // 7 столбик
            [0, 0, 0],  // 8 столбик
            [0, 0, 0],  // 9 столбик
            [0, 0, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        4: [
            [8, 0, 0],
            [4, 0, 0],
            [3, 0, 0],
            [3, 0, 0],
            [0, 2, 0],  // 5 столбик
            [0, 2, 0],  // 6 столбик
            [0, 1, 0],  // 7 столбик
            [0, 1, 0],  // 8 столбик
            [0, 0, 0],  // 9 столбик
            [0, 0, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        5: [
            [8, 0, 0],
            [4, 0, 0],
            [4, 0, 0],
            [3, 0, 0],
            [0, 3, 0],  // 5 столбик
            [0, 2, 0],  // 6 столбик
            [0, 1, 0],  // 7 столбик
            [0, 1, 0],  // 8 столбик
            [0, 1, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 0, 0],  // 11 столбик
            [0, 0, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        6: [
            [8, 0, 0],
            [5, 0, 0],
            [4, 0, 0],
            [3, 0, 0],
            [0, 3, 0],  // 5 столбик
            [0, 2, 0],  // 6 столбик
            [0, 2, 0],  // 7 столбик
            [0, 1, 0],  // 8 столбик
            [0, 1, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 0, 0],  // 13 столбик
            [0, 0, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        7: [
            [9, 0, 0],
            [5, 0, 0],
            [4, 0, 0],
            [3, 0, 0],
            [0, 3, 0],  // 5 столбик
            [0, 2, 0],  // 6 столбик
            [0, 2, 0],  // 7 столбик
            [0, 2, 0],  // 8 столбик
            [0, 1, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 1, 0],  // 13 столбик
            [0, 1, 0],  // 14 столбик
            [0, 0, 0],  // 15 столбик
            [0, 0, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        8: [
            [9, 0, 0],
            [5, 0, 0],
            [4, 0, 0],
            [3, 0, 0],
            [0, 3, 0],  // 5 столбик
            [0, 3, 0],  // 6 столбик
            [0, 2, 0],  // 7 столбик
            [0, 2, 0],  // 8 столбик
            [0, 2, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 1, 0],  // 13 столбик
            [0, 1, 0],  // 14 столбик
            [0, 1, 0],  // 15 столбик
            [0, 1, 0],  // 16 столбик
            [0, 0, 0],  // 17 столбик
            [0, 0, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        9: [
            [10, 0, 0],
            [5, 0, 0],
            [4, 0, 0],
            [4, 0, 0],
            [0, 3, 0],  // 5 столбик
            [0, 3, 0],  // 6 столбик
            [0, 2, 0],  // 7 столбик
            [0, 2, 0],  // 8 столбик
            [0, 2, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 1, 0],  // 13 столбик
            [0, 1, 0],  // 14 столбик
            [0, 1, 0],  // 15 столбик
            [0, 1, 0],  // 16 столбик
            [0, 1, 0],  // 17 столбик
            [0, 1, 0],  // 18 столбик
            [0, 0, 0],  // 19 столбик
            [0, 0, 0]   // 20 столбик
        ],
        10: [
            [10, 0, 0],
            [6, 0, 0],
            [5, 0, 0],
            [4, 0, 0],
            [0, 4, 0],  // 5 столбик
            [0, 3, 0],  // 6 столбик
            [0, 3, 0],  // 7 столбик
            [0, 2, 0],  // 8 столбик
            [0, 2, 0],  // 9 столбик
            [0, 1, 0],  // 10 столбик
            [0, 1, 0],  // 11 столбик
            [0, 1, 0],  // 12 столбик
            [0, 1, 0],  // 13 столбик
            [0, 1, 0],  // 14 столбик
            [0, 1, 0],  // 15 столбик
            [0, 1, 0],  // 16 столбик
            [0, 1, 0],  // 17 столбик
            [0, 1, 0],  // 18 столбик
            [0, 1, 0],  // 19 столбик
            [0, 1, 0]   // 20 столбик
        ]
    };

    const columnPurchaseData = {
        1: { cost: 0, columnNumber: [] },
        2: { cost: 800, columnNumber: [5] },
        3: { cost: 2400, columnNumber: [6] },
        4: { cost: 4000, columnNumber: [7, 8] },
        5: { cost: 8000, columnNumber: [9, 10] },
        6: { cost: 24000, columnNumber: [11, 12] },
        7: { cost: 40000, columnNumber: [13, 14] },
        8: { cost: 120000, columnNumber: [15, 16] },
        9: { cost: 800000, columnNumber: [17, 18] },
        10: { cost: 1600000, columnNumber: [19, 20] }
    };

    const yAxis = document.querySelector('.y-axis');
    const barsContainer = document.querySelector('.bars-container');
    const xAxis = document.querySelector('.x-axis');
    const openLines = document.querySelector('#openLines');
    const turnoverNext = document.querySelector('#turnoverNext');
    const turnoverCount = document.querySelector('#turnoverCount');
    const progressText = document.querySelector('.progress-text');
    const progressHorizontalText = document.querySelector('.progress-horizontal-text');
    const progressCircle = document.querySelector('.progress-circle');
    const tooltips = document.querySelectorAll('.tooltip__lvl-wrap');
    const lvl = document.querySelector('#lvl');
    const prevBtn = document.querySelector('.btn--prev');
    const nextBtn = document.querySelector('.btn--next');
    const myLvlBtn = document.querySelector('.myLvlBtn');
    const careerInfoForm = document.querySelector('.career__info--form');
    const careerInfoWrapColumn = document.querySelector('.career__info--wrap-column');
    const buyNewLine = document.querySelector('#buyNewLine');
    const costNewLine = document.querySelector('#costNewLine');
    const buyBtn = document.querySelector('#buyBtn');

    let currentLevel = 1;
    let currentTurnover = 0;
    let levelUpdated = false;
    let displayedLevel = 1;
    let chartDisplayedLevel = 1;
    let purchasedColumns = 0;
    let columnIndexToBuy = 0;
    let columnCost = 0;
    let columnsAvailable = 0;

    function updateButtonStates() {
        prevBtn.disabled = (currentLevel === 1);
        nextBtn.disabled = (currentLevel === 10);
    }

    function updateLevel(newLevel) {
        if (newLevel < 1 || newLevel > 10) return;

        currentLevel = newLevel;
        lvl.textContent = `${currentLevel}`;
        levelUpdated = false;
        renderChart(chartData, currentLevel);
        updateTurnoverInfo();
        updateTooltips();

        // Display or hide the career info forms based on the level
        if (currentLevel > 1) {
            careerInfoForm.classList.remove('hide');
            careerInfoWrapColumn.classList.add('hide');
        } else {
            careerInfoForm.classList.add('hide');
            careerInfoWrapColumn.classList.remove('hide');
        }

        // Update button states
        updateButtonStates();
    }

    function countSegment1Bars(data) {
        return data[displayedLevel].filter(values => values[0] > 0).length;
    }

    function renderChart(data, level) {
        const chartLevelData = data[level];

        if (!chartLevelData) {
            return;
        }

        yAxis.innerHTML = '';
        barsContainer.innerHTML = '';
        xAxis.innerHTML = '';

        for (let i = 0; i <= 10; i++) {
            const yLabel = document.createElement('div');
            yLabel.classList.add('y-label');
            if (i === 0) {
                yLabel.classList.add('zero');
            } else if (i === 10) {
                yLabel.classList.add('ten');
                yLabel.style.bottom = '0px';
            }
            yLabel.style.bottom = `${i * 10}%`;
            yLabel.textContent = `${i}%`;
            yAxis.appendChild(yLabel);
        }

        chartLevelData.forEach((values, index) => {
            const bar = document.createElement('div');
            bar.classList.add('bar');

            values.forEach((value, i) => {
                const segmentClass = i === 0 ? 'segment1' : i === 1 ? 'segment2' : 'segment3';
                const segment = document.createElement('div');
                segment.classList.add('segment', segmentClass);
                segment.style.height = `${value * 10}%`;
                bar.appendChild(segment);
            });

            barsContainer.appendChild(bar);

            const xLabel = document.createElement('div');
            xLabel.textContent = index + 1;
            xAxis.appendChild(xLabel);
        });

        openLines.textContent = countSegment1Bars(data);
    }

    function updateButtonStates() {
        prevBtn.disabled = (currentLevel === 1);
        nextBtn.disabled = (currentLevel === 10);
    }

    function updateTurnoverInfo() {
        const levelThresholds = [50000, 150000, 500000, 1000000, 3000000, 5000000,
            15000000, 50000000, 100000000, 200000000];

        const targetTurnover = levelThresholds[currentLevel - 1];

        turnoverNext.textContent = targetTurnover ? targetTurnover.toLocaleString() : '';

        turnoverCount.textContent = currentTurnover.toLocaleString();

        const progress = (currentTurnover / targetTurnover) * 100;
        const clampedProgress = Math.min(progress, 100).toFixed(0);

        progressText.textContent = `${clampedProgress}%`;
        progressHorizontalText.textContent = `${clampedProgress}%`;
        progressCircle.style.strokeDasharray = `${clampedProgress}, 100`;

        if (currentTurnover >= targetTurnover) {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }

    function updateTooltips() {
        tooltips.forEach(tooltip => {
            const tooltipLevel = parseInt(tooltip.getAttribute('data-lvl'), 10);
            if (tooltipLevel <= currentLevel) {
                tooltip.classList.add('active');
            } else {
                tooltip.classList.remove('active');
            }
        });
    }

    // Функция для обновления информации о покупке колонок
    function updateColumnPurchaseInfo() {
        const currentLevel = parseInt(document.querySelector('#lvl').textContent, 10); // Получаем текущий уровень из элемента
        const purchaseInfo = columnPurchaseData[currentLevel]; // Получаем информацию о покупке для текущего уровня

        console.log(`Обновление информации для уровня ${currentLevel}:`, purchaseInfo);

        if (purchaseInfo) {
            const columnNumbers = purchaseInfo.columnNumber;
            const cost = purchaseInfo.cost;

            const buyNewLine = document.querySelector('#buyNewLine');
            const costNewLine = document.querySelector('#costNewLine');

            if (buyNewLine && costNewLine) {
                // Преобразуем массив номеров колонок в строку
                buyNewLine.textContent = columnNumbers.length > 0
                    ? columnNumbers.join(', ')
                    : 'Нет доступных колонок';

                // Отображаем стоимость
                costNewLine.textContent = cost.toLocaleString();
            } else {
                console.error('Элементы #buyNewLine или #costNewLine не найдены в DOM.');
            }
        } else {
            console.error(`Информация о покупке для уровня ${currentLevel} не найдена.`);
        }
    }

    function buyNewColumn() {
        const purchaseInfo = columnPurchaseData[currentLevel];
        if (purchaseInfo) {
            if (currentTurnover >= columnCost) {
                currentTurnover -= columnCost;
                levelData[currentLevel].push([0, 0, 0]);
                chartData[currentLevel].push([0, 0, 0]);
                // Обновляем номер доступных колонок
                // purchasedColumns += 1;
                updateColumnPurchaseInfo();
                renderChart(chartData, currentLevel);
                updateTurnoverInfo();

                // Возможно, добавление логики для скрытия формы после покупки
                if (columnIndexToBuy.length === 0) {
                    careerInfoForm.classList.add('hide');
                    careerInfoWrapColumn.classList.remove('hide');
                }
            } else {
                alert('Not enough turnover for this column.');
            }
        }
    }

    function simulateTurnover() {
        setInterval(() => {
            currentTurnover += 10000;
            updateTurnoverInfo();
        }, 1000);
    }

    function handleLevelChange(level) {
        displayedLevel = level;
        renderChart(levelData, displayedLevel);
        updateButtonStates();
    }

    // Initialize the chart for the current level on page load
    renderChart(chartData, currentLevel);
    updateButtonStates();

    prevBtn.addEventListener('click', () => {
        if (displayedLevel > 1) {
            displayedLevel--;
            renderChart(levelData, displayedLevel);

            // Обновление состояния класса career__info--form
            if (displayedLevel === 1) {
                careerInfoForm.classList.add('hide');
                careerInfoWrapColumn.classList.remove('hide');
            } else {
                careerInfoForm.classList.remove('hide');
                careerInfoWrapColumn.classList.add('hide');
            }

            // Обновление состояния кнопок prev и next
            prevBtn.disabled = (displayedLevel === 1);
            nextBtn.disabled = (displayedLevel === Object.keys(levelData).length);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (displayedLevel < 10) {
            displayedLevel++;
            renderChart(levelData, displayedLevel);

            // Обновление состояния класса career__info--form
            if (displayedLevel === 1) {
                careerInfoForm.classList.add('hide');
                careerInfoWrapColumn.classList.remove('hide');
            } else {
                careerInfoForm.classList.remove('hide');
                careerInfoWrapColumn.classList.add('hide');
            }

            // Обновление состояния кнопок prev и next
            prevBtn.disabled = (displayedLevel === 1);
            nextBtn.disabled = (displayedLevel === Object.keys(levelData).length);
        }
    });

    myLvlBtn.addEventListener('click', () => {
        handleLevelChange(currentLevel);
        renderChart(chartData, currentLevel);
    });

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', () => {
            const level = parseInt(tooltip.getAttribute('data-lvl'), 10);
            if (level !== currentLevel) {
                updateLevel(level);
            }
        });
    });

    buyBtn.addEventListener('click', buyNewColumn);

    simulateTurnover();
});
