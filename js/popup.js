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

    const closeButtons = document.querySelectorAll('.btn--close, #closePopup');
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const popup = button.closest('.popup');
            if (popup) {
                popup.classList.add('hide');
            }
        });
    });
});

document.getElementById('shareBtn').addEventListener('click', function() {
    var popup = document.querySelector('.popup.popup--post');
    if (popup.classList.contains('hide')) {
        popup.classList.remove('hide');
    }
});

document.addEventListener('click', function(event) {
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

document.getElementById('btnAddActiveProduct').addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('hide');
});

