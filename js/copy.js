document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('copyKey').addEventListener('click', function () {
        var dKeyInput = document.getElementById('dKey');
        var textToCopy = dKeyInput.value;

        navigator.clipboard.writeText(textToCopy).then(function () {
            // Успешно скопировано, без оповещения
        }).catch(function (err) {
            console.error('Не удалось скопировать текст: ', err);
        });
    });
});
