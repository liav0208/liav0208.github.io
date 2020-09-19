// newSletter

let newsletter_joinBotton = document.querySelector('.joinNewsLetter'),
    newsletter_boxWrapper = document.querySelector('#newLetterWrapper'),
    newsletter_close = document.querySelector('.closeNewsletter');

newsletter_joinBotton.addEventListener('click', () => {
    newsletter_boxWrapper.style.display = 'block';
});

newsletter_close.addEventListener('click', () => {
    newsletter_boxWrapper.style.display = 'none';
});

newsletter_boxWrapper.addEventListener('click', (e) => {
    if (e.target.id === 'newLetterWrapper') {
        newsletter_boxWrapper.style.display = 'none';
    };
});


//navBar

let nav_hamburger = document.querySelector('#hamburger'),
    nav_manu = document.querySelector('#navManu');

nav_hamburger.addEventListener('click', () => {
    if (nav_manu.style.display == 'block') {
        nav_manu.style.display = 'none';
    } else {
        nav_manu.style.display = 'block';
    }
    document.querySelector('.bar1').classList.toggle('bar1X');
    document.querySelector('.bar2').classList.toggle('bar2X');
    document.querySelector('.bar3').classList.toggle('bar3X');
})

//contact
const submitButton = document.querySelector('input[type="submit"]'),
    contactForm = document.querySelector('#contactForm');

submitButton.addEventListener('submit', (e) => {
    let name = document.querySelector('#userName'),
        email = document.querySelector('#userEmail'),
        content = document.querySelector('#content');

    if (name.value == "" || email.value == "" || content.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        submitButton.setAttribute('disabled', true);
        alert("Please complete the fields");


    }
    e.preventDefault();
});