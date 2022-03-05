import './style/style.css';

// const serviciosContentImage = document.getElementById('serviciosContentImagePG');
// const serviciosPaginaWeb = document.getElementById('serviciosPaginaWeb');
// const contentPaginaWebPG

const serviciosContentContent = document.querySelectorAll('.serviciosContentContent');
const proyectosContent = document.querySelector('.proyectosContent');
// const contentPaginaWebPG = document.getElementById('contentPaginaWebPG');

// console.log(contentPaginaWebPG);
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.entry;
        if (!entry.isIntersecting) {
            return;
        }
        console.log(entry.target.getAttribute("tipe"));
        console.log(entry.target);
        switch (entry.target.getAttribute("tipe")) {
            case 'pg':
                entry.target.querySelector('.serviciosContentImage').classList.add('fadeRtoL');
                entry.target.querySelector('.contentPaginaWeb').classList.add('fadeRtoL');
                break;

            case 'aw':
                entry.target.querySelector('.serviciosContentImageAW').classList.add('fadeRtoL');
                entry.target.querySelector('.contentAppWeb').classList.add('fadeRtoL');
                break;

            case 'ot':
                entry.target.querySelector('.serviciosContentImage').classList.add('fadeRtoL');
                entry.target.querySelector('.contentOtros').classList.add('fadeRtoL');
                break;

            default:
                break;
        }
    });

}, {
    root: null,
    rootMargin: '-150px',
    threshold: 0
});

const observerProject = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        console.log(entry.target);
        entry.target.classList.add('proyectosContentReveal');
        // entry.isIntersecting ? entry.target.classList.add('proyectosContentReveal') : console.log('nope');

    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});

observerProject.observe(proyectosContent);
serviciosContentContent.forEach(element => observer.observe(element));
// observer.observe(contentPaginaWebPG);


const divBurger = document.getElementById('divBurger');
const navLinks = document.getElementById('navLinks');

divBurger.addEventListener('click', () => {
    navLinks.classList.toggle('activeNavLinks');
    divBurger.classList.toggle('toogle');
});