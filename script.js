'use strict';

// localStorage.setItem('number1', 5);
// localStorage.setItem('number', 5);

// console.log(localStorage.getItem('number'))

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color')

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    // if (localStorage.getItem('bg') === 'changed') {
    //     localStorage.removeItem('bg');
    //     form.st
    // }
    else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red'
    }
})