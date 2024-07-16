document.addEventListener("DOMContentLoaded", function () {
    const customSelects = document.querySelectorAll(".custom-select");
    const inputField = document.querySelector(".form__input--clean");
    const activateButton = document.querySelector(".btn--primary");

    customSelects.forEach(customSelect => {
        const trigger = customSelect.querySelector(".custom-select-trigger");
        const options = customSelect.querySelectorAll(".custom-option");

        trigger.addEventListener("click", function () {
            customSelect.classList.toggle("open");
        });

        options.forEach(option => {
            option.addEventListener("click", function () {
                const selectedOption = customSelect.querySelector(".custom-option.selected");
                if (selectedOption) {
                    selectedOption.classList.remove("selected");
                }
                option.classList.add("selected");

                // Update trigger content
                const optionContent = option.innerHTML;
                trigger.innerHTML = optionContent;

                customSelect.classList.remove("open");
            });
        });

        document.addEventListener("click", function (e) {
            if (!customSelect.contains(e.target)) {
                customSelect.classList.remove("open");
            }
        });
    });

    // Add event listener to the input field
    inputField.addEventListener("input", function () {
        if (inputField.value.trim() !== "") {
            activateButton.removeAttribute("disabled");
        } else {
            activateButton.setAttribute("disabled", "true");
        }
    });
});