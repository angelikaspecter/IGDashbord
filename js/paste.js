document.getElementById('pasteKey').addEventListener('click', async function() {
    try {
        const text = await navigator.clipboard.readText();
        document.getElementById('dKeyPaste').value = text;
    } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
    }
});