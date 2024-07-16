document.addEventListener('DOMContentLoaded', function () {
    const imageInput = document.getElementById('imageInput');
    const imageContainer = document.getElementById('imageContainer');
    const resetButton = document.getElementById('resetButton');
    const errorMessage = document.getElementById('errorMessage');
    const message = document.getElementById('Message');

    imageInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            if (file.size > 4 * 1024 * 1024) { // 4 MB = 4 * 1024 * 1024 bytes
                errorMessage.textContent = 'File size exceeds 4 MB. Please choose a smaller file.';
                imageContainer.innerHTML = '<span>No Image</span>';
                hideMessageIfError();
                return;
            } else {
                errorMessage.textContent = '';
                const reader = new FileReader();
                reader.onload = function (e) {
                    imageContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
                }
                reader.readAsDataURL(file);
            }
        }
    });

    resetButton.addEventListener('click', function () {
        imageInput.value = '';
        imageContainer.innerHTML = '<span>No Image</span>';
        errorMessage.textContent = '';
        message.style.display = 'block'; // Ensure the message is shown when resetting
    });

    function hideMessageIfError() {
        if (errorMessage.textContent !== '') {
            message.style.display = 'none';
        }
    }
});
