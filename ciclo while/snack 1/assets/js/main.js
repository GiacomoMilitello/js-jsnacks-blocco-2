/*
Ciclo While
snack 1:
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50
*/

let numbersArray = [];
let sum = 0;

while (sum <= 50) {
    let userNumber = prompt('Inserisci un numero:');
    let n = Number(userNumber);
    if (!isNaN(n)) {
        numbersArray.push(n);
        sum += n;
        alert(`Numero ${n} è stato aggiunto. Ora la somma è ${sum}.`);
    } else {
        alert('Per favore, inserisci un numero valido.');
    }
}

alert('Con questo numero hai superato 50!!!');