//trivia

const rightAnswer = ['#fatTuesday', '#free', '#eightTeen', '#pyg', '#latoya', '#mask', '#change', '#america', '#every', '#five'],
    radios = document.getElementsByClassName('radio');
checkAnswer = document.querySelector('input[type="submit"]');

let counter = 0,
    checkedCounter = 0;

checkAnswer.addEventListener('click', (e) => {
    for (let x = 0; x < radios.length; x++) {
        if (radios[x].checked) {
            checkedCounter++;
            radios[x].nextElementSibling.style.color = 'red';
        }
    }
    for (let i = 0; i < rightAnswer.length; i++) {

        if (document.querySelector(rightAnswer[i]).checked) {
            document.querySelector(rightAnswer[i]).nextElementSibling.style.color = '#8CBF3F';
            counter++;
        }
    }
    if (checkedCounter != 10) {
        alert('Please Complete The Test!');
        counter = 0;
        checkedCounter = 0;
        for (let z = 0; z < radios.length; z++) {
            radios[z].nextElementSibling.style.color = '#000';
        }
    } else {
        document.querySelector('#answerCounter').innerHTML = `you've got ${counter}/10 correct answer`;
    }


    e.preventDefault();
})