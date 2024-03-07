//scrivo in console tutti i numeri da uno a cento, poi... 
const numbContainer = document.querySelector('#numbers-square');
for(let i = 1; i <= 100; i++) {
    let numberDivision;

    //quelli divisibili per tre e cinque scrivo fizzbuzz
    if(i % 3 && i % 5 === 0) {
        numberDivision = ' fizzbuzz';

    //quelli per 5 con buzz
    } else if(i % 5 === 0) {
        numberDivision = ' buzz';

    //quelli divisibili per tre con fizz,
    } else if(i % 3 === 0) {
        numberDivision = ' fizz';
    } else
    numberDivision = ''

    //poi li scrivo in console
    console.log(i + numberDivision);

    //poi li scrivo nel HTML
    const newSquare = `<div class="square ${numberDivision}">${i} ${numberDivision}</div>`;
    numbContainer.innerHTML += newSquare;
}

