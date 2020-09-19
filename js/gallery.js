//gallery

let galleryPic = document.getElementsByClassName('galleryPic'),
    mainPic = document.querySelector('#mainPic'),
    galleryWrapper = document.querySelector('#galleryWrapper'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next'),
    exit = document.querySelector('#exitButton');

for (let i = 0; i < galleryPic.length; i++) {
    galleryPic[i].addEventListener('click', (e) => {
        let chosenPic = e.target;
        mainPic.setAttribute('src', chosenPic.src);
        document.querySelector('#galleryWrapper').style.display = 'flex';
        document.querySelector('#galleryWrapper').focus();
    });
};

galleryWrapper.addEventListener('click', (e) => {
    if (e.target.id === 'galleryWrapper') {
        galleryWrapper.style.display = 'none';
    }
});

exit.addEventListener('click', () => {
    galleryWrapper.style.display = 'none';
})

//next image

next.addEventListener('click', () => {
    for (let i = 0; i < galleryPic.length - 1; i++) {
        if (i === galleryPic.length - 2) {
            mainPic.src = galleryPic[0].src;
        }
        if (mainPic.src === galleryPic[i].src) {
            mainPic.removeAttribute('src');
            mainPic.setAttribute('src', galleryPic[i + 1].src);
            break;
        }
    }
})
//prev image
prev.addEventListener('click', () => {
    for (let i = 0; i < galleryPic.length; i++) {
        if (mainPic.src === galleryPic[0].src) {
            mainPic.removeAttribute('src')
            mainPic.setAttribute('src', galleryPic[galleryPic.length - 1].src);
            break;
        } else if (galleryPic[i].src === mainPic.src) {
            mainPic.removeAttribute('src');
            mainPic.setAttribute('src', galleryPic[i - 1].src);
            break;
        }
    }
});


// keypress next
galleryWrapper.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) {
        for (let i = 0; i < galleryPic.length - 1; i++) {
            if (i === galleryPic.length - 2) {
                mainPic.src = galleryPic[0].src;
            }
            if (mainPic.src === galleryPic[i].src) {
                mainPic.removeAttribute('src');
                mainPic.setAttribute('src', galleryPic[i + 1].src);
                break;
            }
        }
    }
})

//keypress before 
galleryWrapper.addEventListener('keydown', (e) => {
    if (e.keyCode === 37) {
        for (let i = 0; i < galleryPic.length; i++) {
            if (mainPic.src === galleryPic[0].src) {
                mainPic.removeAttribute('src')
                mainPic.setAttribute('src', galleryPic[galleryPic.length - 1].src);
                break;
            } else if (galleryPic[i].src === mainPic.src) {
                mainPic.removeAttribute('src');
                mainPic.setAttribute('src', galleryPic[i - 1].src);
                break;
            }
        }
    }
})