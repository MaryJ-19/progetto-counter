

let counter = document.querySelector('.counter');
let buttons = document.querySelector('.buttons-wrapper')

// creazione elementi 

let number = document.createElement('h1')
number.innerText = '0'
counter.appendChild(number)

const lessButton = document.createElement('button')
lessButton.innerText = '-'
buttons.appendChild(lessButton)

const resetButton = document.createElement('button')
resetButton.innerText = 'reset'
buttons.appendChild(resetButton)

const moreButton = document.createElement('button')
moreButton.innerText = '+'
buttons.appendChild(moreButton)

// funzioni 

resetButton.addEventListener('click', (e) => {
    e.preventDefault()
    number.innerText = '0'
})

moreButton.addEventListener('click', (e) => {
    e.preventDefault()
    number.innerText = Number(number.innerText) + 1
})

lessButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (number.innerText != 0) {
        number.innerText = Number(number.innerText) - 1;
    }
})



