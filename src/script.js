document.addEventListener('DOMContentLoaded', function () {

    const body = document.body;
    const toggleTheme = document.querySelector('.toggle-theme')
    const light = toggleTheme.children[0];
    const dark = toggleTheme.children[1];

    toggleTheme.addEventListener('click', changeTheme)

    function changeTheme() {
        if (body.classList.contains('dark-mode')) {
            lightMode();
        }
        else if (!body.classList.contains('dark-mode')) {
            darkMode();
        }
    }

    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
        darkMode();
    }

    function lightMode() {
        body.classList.remove('dark-mode')
        light.classList.add('active')
        dark.classList.remove('active')
    }

    function darkMode() {
        body.classList.add('dark-mode')
        light.classList.remove('active')
        dark.classList.add('active')
    }

})