let switchToggle = document.querySelector('input[type="checkbox"]');
let modeIcon = document.querySelector('.fas');
let svg = '.svg';
let imagePath = `assets/svg/`;
let images = ['undraw_experience_design_eq-3-j',
            'undraw_usability_testing_re_uu1g',
            'undraw_web_devices_re_m8sc'];


function imageSelect (mode) {
let allImages = document.querySelectorAll('[class*="svg_image"]');

    allImages.forEach((element,index) => {
        let imageSrc = `${imagePath}${images[index]}${mode}${svg}`;
            element.setAttribute('src', imageSrc);
        });
}

imageSelect('')

function switchMode (event) {
        if(event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            modeIcon.classList.replace('fa-sun', 'fa-moon');
            imageSelect('_dark')
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            modeIcon.classList.replace('fa-moon', 'fa-sun');        
            imageSelect('')                    ;
            }
    }

    switchToggle.addEventListener('change', switchMode);
