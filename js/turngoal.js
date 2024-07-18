document.addEventListener("DOMContentLoaded", function () {
    var turnoverButton = document.getElementById("turnover");
    var goalButton = document.getElementById("goal");
    var turnoverInfo = document.getElementById("turnoverInfo");
    var goalInfo = document.getElementById("goalInfo");

    function switchActive(buttonToActivate, buttonToDeactivate, infoToShow, infoToHide) {
        buttonToActivate.classList.add("active");
        buttonToDeactivate.classList.remove("active");
        infoToShow.classList.remove("hide");
        infoToHide.classList.add("hide");
    }

    turnoverButton.addEventListener("click", function () {
        switchActive(turnoverButton, goalButton, turnoverInfo, goalInfo);
    });

    goalButton.addEventListener("click", function () {
        switchActive(goalButton, turnoverButton, goalInfo, turnoverInfo);
    });
});