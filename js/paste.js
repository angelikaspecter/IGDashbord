document.getElementById('pasteKey').addEventListener('click', async function() {
    try {
        // Проверка доступности API буфера обмена
        if (!navigator.clipboard) {
            alert('Clipboard API не поддерживается или заблокирован браузером.');
            return;
        }

        const text = await navigator.clipboard.readText();
        document.getElementById('dKeyPaste').value = text;
    } catch (err) {
        console.error('Не удалось прочитать содержимое буфера обмена: ', err);
        alert('Не удалось прочитать содержимое буфера обмена. Возможно, браузер блокирует доступ.');
    }
});