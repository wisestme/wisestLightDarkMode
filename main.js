let switchToggle = document.querySelector('input[type="checkbox"]');
let modeIcon = document.querySelector('.fas');
let svg = '.svg';
let imagePath = `assets/svg/`;
let images = ['undraw_experience_design_eq-3-j',
            'undraw_usability_testing_re_uu1g',
            'undraw_web_devices_re_m8sc'];

let allImages = document.querySelectorAll('[class*="svg_image"]');
console.log(allImages);

allImages.forEach((element,index) => {
    
let imageSrc = `${imagePath}${images[index]}${svg}`;

    element.setAttribute('src', imageSrc);
});

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