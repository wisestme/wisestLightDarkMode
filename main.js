let switchToggle = document.querySelector('input[type="checkbox"]');
let modeIcon = document.querySelector('.fas');

function switchMode (event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        modeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        modeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

switchToggle.addEventListener('change', switchMode);