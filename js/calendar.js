document.addEventListener("DOMContentLoaded", function () {
    const calendarBtn = document.getElementById("calendar-btn");
    const calendarPopup = document.getElementById("calendar-popup");
    const calendarInput = document.getElementById("calendar");
    const datepicker = document.getElementById("datepicker");
    const currentMonth = document.getElementById("current-month");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const resetBtn = document.getElementById("reset");

    let startDate = null;
    let endDate = null;
    let displayedDate = new Date();

    function updateCalendar() {
        const year = displayedDate.getFullYear();
        const month = displayedDate.getMonth();
        currentMonth.textContent = displayedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        datepicker.innerHTML = '';
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'day';
            datepicker.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.textContent = day;
            dayDiv.dataset.day = day;
            dayDiv.dataset.month = month + 1;
            dayDiv.dataset.year = year;

            if (startDate && endDate) {
                const date = new Date(year, month, day);
                if (date >= startDate && date <= endDate) {
                    dayDiv.classList.add('in-range');
                }
                if (date.getTime() === startDate.getTime()) {
                    dayDiv.classList.add('selected-start');
                }
                if (date.getTime() === endDate.getTime()) {
                    dayDiv.classList.add('selected-end');
                }
            }

            datepicker.appendChild(dayDiv);
        }
    }

    function formatDateRange(start, end) {
        const startDay = String(start.getDate()).padStart(2, '0');
        const startMonth = String(start.getMonth() + 1).padStart(2, '0');
        const endDay = String(end.getDate()).padStart(2, '0');
        const endMonth = String(end.getMonth() + 1).padStart(2, '0');
        return `${startDay}.${startMonth}-${endDay}.${endMonth}`;
    }

    calendarBtn.addEventListener("click", function (event) {
        event.preventDefault();
        calendarPopup.style.display = calendarPopup.style.display === "none" ? "block" : "none";
        if (calendarPopup.style.display === "block") {
            updateCalendar();
        }
    });

    prevMonthBtn.addEventListener("click", function () {
        displayedDate.setMonth(displayedDate.getMonth() - 1);
        updateCalendar();
    });

    nextMonthBtn.addEventListener("click", function () {
        displayedDate.setMonth(displayedDate.getMonth() + 1);
        updateCalendar();
    });

    resetBtn.addEventListener("click", function () {
        startDate = null;
        endDate = null;
        calendarInput.value = '';
        updateCalendar();
    });

    datepicker.addEventListener("click", function (event) {
        if (event.target.classList.contains("day") && event.target.textContent) {
            const day = parseInt(event.target.dataset.day);
            const month = parseInt(event.target.dataset.month) - 1;
            const year = parseInt(event.target.dataset.year);
            const selectedDate = new Date(year, month, day);

            if (!startDate || (startDate && endDate)) {
                startDate = selectedDate;
                endDate = null;
                Array.from(datepicker.children).forEach(child => child.classList.remove("selected-start", "selected-end", "in-range"));
                event.target.classList.add("selected-start");
            } else {
                endDate = selectedDate;
                if (startDate <= endDate) {
                    Array.from(datepicker.children).forEach(child => {
                        const childDay = parseInt(child.dataset.day);
                        const childMonth = parseInt(child.dataset.month) - 1;
                        const childYear = parseInt(child.dataset.year);
                        const date = new Date(childYear, childMonth, childDay);

                        if (date >= startDate && date <= endDate) {
                            child.classList.add("in-range");
                        }
                        if (date.getTime() === startDate.getTime()) {
                            child.classList.add("selected-start");
                        }
                        if (date.getTime() === endDate.getTime()) {
                            child.classList.add("selected-end");
                        }
                    });
                    calendarInput.value = formatDateRange(startDate, endDate);
                    calendarPopup.style.display = "none";
                } else {
                    startDate = null;
                    endDate = null;
                    Array.from(datepicker.children).forEach(child => child.classList.remove("selected-start", "selected-end", "in-range"));
                }
            }
        }
    });

    document.addEventListener("click", function (event) {
        if (!calendarPopup.contains(event.target) && !calendarBtn.contains(event.target)) {
            calendarPopup.style.display = "none";
        }
    });
});
