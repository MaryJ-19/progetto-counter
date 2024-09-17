let counter = document.querySelector('.counter');
let buttons = document.querySelector('.buttons-wrapper')

function createElements(tagname, innerText){
    let newElement = document.createElement(tagname)
    newElement.innerText = innerText

    return newElement
}

//creazione elementi
let number = createElements('h1', 0);
const lessButton = createElements('button', '-');
const resetButton =  createElements('button', 'reset');
const moreButton = createElements('button', '+');

//inserimento elementi nel DOM
counter.appendChild(number);
buttons.appendChild(lessButton);
buttons.appendChild(resetButton);
buttons.appendChild(moreButton);

//aggiunta event listener con event delegation
buttons.addEventListener('click', (e) => {
    e.preventDefault()
    let currentNumber = Number(number.innerText);

    if(e.target == resetButton){
        number.innerText = '0'
    }else if (e.target == moreButton){
      number.innerText = currentNumber + 1
    }else if (e.target == lessButton && currentNumber != 0) {
        number.innerText = currentNumber - 1;
    }
})