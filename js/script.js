//scrivo in console tutti i numeri da uno a cento, poi... 
for(let i = 1; i <= 100; i++) {
    let numberDIvision;
    //quelli idvisibili per tre e cinque scrivo fizzbuzz
    if(i % 3 && i % 5 === 0) {
        numberDIvision = ' fizzbuzz'; 
    //quelli per 5 con buzz
    } else if(i % 5 === 0) {
        numberDIvision = ' buzz';

    //quelli divisibili per tre con fizz,
    } else if(i % 3 === 0) {
        numberDIvision = ' fizz';
    } else
    numberDIvision = ''

    //poi li scrivo in console
    console.log(i + numberDIvision);

    //poi li scrivo nel HTML
}
