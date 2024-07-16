document.addEventListener("DOMContentLoaded", function () {
    const langBlocks = document.querySelectorAll('.lang');

    langBlocks.forEach(function (langBlock, index) {
        const langMenu = langBlock.querySelector('.lang__menu');
        const langDropdown = langBlock.querySelector('.lang__dropdown');
        const dropdownIcon = langBlock.querySelector('.lang__icon--dropdown');
        const currentFlag = langMenu.querySelector('.lang__flag');
        const currentDesc = langMenu.querySelector('.desc');
        const dropdownItems = langBlock.querySelectorAll('.lang__dropdown-item');

        // Load saved language from localStorage for this block
        const savedLang = localStorage.getItem('selectedLang_' + index);
        if (savedLang) {
            const savedItem = langBlock.querySelector(`.lang__dropdown-item .lang__link[data-lang="${savedLang}"]`);
            if (savedItem) {
                updateActiveLanguage(savedItem, currentFlag, currentDesc, dropdownItems);
            }
        }

        langMenu.addEventListener('click', function (event) {
            langDropdown.classList.toggle('hide');
            dropdownIcon.classList.toggle('active');
            event.stopPropagation();
        });

        document.addEventListener('click', function () {
            langDropdown.classList.add('hide');
            dropdownIcon.classList.remove('active');
        });

        langDropdown.addEventListener('click', function (event) {
            event.stopPropagation();
        });

        dropdownItems.forEach(function (item) {
            const link = item.querySelector('.lang__link');
            link.addEventListener('click', function (event) {
                event.preventDefault();  // Prevent the default link behavior
                updateActiveLanguage(link, currentFlag, currentDesc, dropdownItems);
                localStorage.setItem('selectedLang_' + index, link.getAttribute('data-lang'));
            });
        });
    });

    function updateActiveLanguage(selectedItem, currentFlag, currentDesc, dropdownItems) {
        // Remove active class from all items
        dropdownItems.forEach(function (item) {
            const link = item.querySelector('.lang__link');
            link.classList.remove('active');
            link.querySelector('.lang__icon--check').classList.add('hide');
        });

        // Add active class to selected item
        selectedItem.classList.add('active');
        selectedItem.querySelector('.lang__icon--check').classList.remove('hide');

        // Change current flag and description in the menu
        const flagSrc = selectedItem.querySelector('.lang__flag').getAttribute('src');
        const langText = selectedItem.querySelector('.desc').textContent;
        currentFlag.setAttribute('src', flagSrc);
        currentDesc.textContent = langText;

        // Hide the dropdown
        selectedItem.closest('.lang__dropdown').classList.add('hide');
        selectedItem.closest('.lang').querySelector('.lang__icon--dropdown').classList.remove('active');
    }
});