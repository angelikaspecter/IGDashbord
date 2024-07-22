document.addEventListener('DOMContentLoaded', function () {
    const depositOpenBtn = document.getElementById('DepositOpenPopup');
    if (depositOpenBtn) {
        depositOpenBtn.addEventListener('click', function () {
            const depositPopup = document.getElementById('DepositPopup');
            if (depositPopup) {
                depositPopup.classList.remove('hide');
            }
        });
    }

    const withdrawOpenBtn = document.getElementById('WithdrawOpenPopup');
    if (withdrawOpenBtn) {
        withdrawOpenBtn.addEventListener('click', function () {
            const withdrawPopup = document.getElementById('WithdrawPopup');
            if (withdrawPopup) {
                withdrawPopup.classList.remove('hide');
            }
        });
    }

    // Функция для закрытия попапа
    function closePopup(popup) {
        if (popup) {
            popup.classList.add('hide');
        }
    }

    // Закрытие попапа по нажатию на кнопки
    const closeButtons = document.querySelectorAll('.btn--close, #closePopup');
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const popup = button.closest('.popup');
            closePopup(popup);
        });
    });

    // Закрытие попапа по клику вне блока .popup__wrap
    document.addEventListener('click', function (event) {
        const popupWrap = event.target.closest('.popup__wrap');
        const popupNav = event.target.closest('.popup__nav');
        const popup = event.target.closest('.popup');

        // Проверяем, что клик был вне .popup__wrap и вне .popup__nav, но внутри .popup
        if (!popupWrap && !popupNav && popup) {
            closePopup(popup);
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var signUpBtn = document.querySelector('.SingUpBtn');
    var createAccountPopup = document.getElementById('CreateAccount');

    signUpBtn.addEventListener('click', function () {
        createAccountPopup.classList.remove('hide');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var btnAddActiveProduct = document.querySelector('.btnAddActiveProduct');
    var createAccountPopup = document.getElementById('ActivateProductPopup');

    btnAddActiveProduct.addEventListener('click', function () {
        createAccountPopup.classList.remove('hide');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const filterBtn = document.querySelector('.filter__btn');
    const filterWrap = document.querySelector('.filter__wrap');

    filterBtn.addEventListener('click', function (event) {
        event.preventDefault();

        filterWrap.classList.toggle('hide');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var partnersBtnPopup = document.querySelector('.partnersBtnPopup');
    var partnersPopup = document.getElementById('Partners');

    partnersBtnPopup.addEventListener('click', function () {
        partnersPopup.classList.remove('hide');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var changePasswordBtn = document.querySelector('.changePasswordBtn');
    var changePasswordPopup = document.getElementById('changePasswordPopup');

    changePasswordBtn.addEventListener('click', function () {
        changePasswordPopup.classList.remove('hide');
    });
});

document.getElementById('shareBtn').addEventListener('click', function () {
    var popup = document.querySelector('.popup.popup--post');
    if (popup.classList.contains('hide')) {
        popup.classList.remove('hide');
    }
});

document.addEventListener('click', function (event) {
    if (event.target.matches('.btn.btn--close.btn--post')) {
        var popup = event.target.closest('.popup--post');
        popup.classList.add('hide');
    }
});

document.querySelectorAll('.AddLiquidityBtn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('AddLiquidityPopup').classList.remove('hide');
    });
});

// Функция для удаления класса "hide" у попапа
function showPopup() {
    document.getElementById('ActivateProductPopup').classList.remove('hide');
}

document.addEventListener('DOMContentLoaded', function () {
    // Добавление обработчиков событий для карточек первой группы
    var passiveCard = document.getElementById('IGPassive');
    var activeCard = document.getElementById('IGActive');
    var capitalCard = document.getElementById('IGCapital');

    if (passiveCard) passiveCard.addEventListener('click', showPopup);
    if (activeCard) activeCard.addEventListener('click', showPopup);
    if (capitalCard) capitalCard.addEventListener('click', showPopup);

    // Добавление обработчиков событий для карточек второй группы
    var lifeCard = document.getElementById('IGFLife');
    var energyCard = document.getElementById('IGFEnergy');

    if (lifeCard) lifeCard.addEventListener('click', showPopup);
    if (energyCard) energyCard.addEventListener('click', showPopup);
});