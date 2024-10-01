document.addEventListener('DOMContentLoaded', function () {

    const body = document.body;
    const toggleTheme = document.querySelector('.toggle-theme')
    const light = toggleTheme.children[0];
    const dark = toggleTheme.children[1];

    toggleTheme.addEventListener('click', changeTheme)

    function changeTheme() {
        if (body.classList.contains('mode-sombre')) {
            lightMode();
        }
        else if (!body.classList.contains('mode-sombre')) {
            darkMode();
        }
    }

    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
        darkMode();
    }

    function lightMode() {
        body.classList.remove('mode-sombre')
        light.classList.add('active')
        dark.classList.remove('active')
    }

    function darkMode() {
        body.classList.add('mode-sombre')
        light.classList.remove('active')
        dark.classList.add('active')
    }

})