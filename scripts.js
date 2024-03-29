let splide = new Splide('.splide', {
    fixedWidth: '40vw',
    perPage: 3,
    breakpoints: {
        1000: {
            fixedWidth: '80vw',
            perPage: 1
        },
        640: {
            fixedWidth: '100%',
            perPage: 1
        }
    },
    focus: 'center',
    type: 'loop'
}).mount();
/**
 * Code that makes the navbar stick to top
 */
const navbar = document.querySelector('#navbarDesktop');
const navbarMobile = document.querySelector('#navbarMobile');
let stickyDistance = navbar.offsetTop;

function stickyNavbar() {
    if (window.scrollY >= stickyDistance) {    
        navbar.classList.add('sticky');
        navbarMobile.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky'); 
        navbarMobile.classList.remove('sticky');   
    }
    if (window.scrollY == 0){ 
        navbar.classList.remove('sticky');
        navbarMobile.classList.remove('sticky');
    }
}

window.addEventListener('scroll', () => {
    stickyNavbar();
});

/**
 * Code that makes a collapsible menu work
 */

const menu = document.querySelector('#navContainerMobile');
const toggle = document.querySelector('#menuButton');

function collapse() {
    if (menu.classList.contains('collapsed')) {
        menu.classList.replace('collapsed', 'show');
    } else {
        menu.classList.replace('show', 'collapsed');
    }
}

toggle.addEventListener('click', collapse);

/** 
 * Custom slider buttons
 */

document.querySelector("#back").addEventListener('click', function() {
    splide.go('-1')
});
document.querySelector("#next").addEventListener('click', function() {
    splide.go('+1');
});