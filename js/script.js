//scrivo in console tutti i numeri da uno a cento, poi divido quelli divisibili per tre con fizz, per 5 con buzz e per entrambi con fizzbuzz, poi li scrivo in console
for(let i = 1; i <= 100; i++) {
    let numberDIvision;
    if(i % 3 === 0) {
        numberDIvision = 'fizz'   
    } else if(i % 5 === 0) {
        numberDIvision = 'buzz'
    }
 
    console.log(i + ' - ' + numberDIvision);

}