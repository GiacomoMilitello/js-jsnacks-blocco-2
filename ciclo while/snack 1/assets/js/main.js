/*
Ciclo While
snack 1:
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50
*/

const buttonOk = document.getElementById("ok");
const numberHtml = document.getElementById('number');
const ulHtml = document.getElementById('result');
let numbersArray = [];
let sum = 0;

buttonOk.addEventListener('click', function() {
    const n = Number(numberHtml.value);
    if (!isNaN(n)) {
        numbersArray.push(n);
        sum += n;
        let listItem = document.createElement('li');
        listItem.textContent = `Numero ${n} è stato aggiunto. Ora la somma è ${sum}`;
        ulHtml.appendChild(listItem);
    } if (sum > 50) {
            let finalMessage = document.createElement('li');
            finalMessage.textContent = `Con l'ultimo numero hai superato 50!!!`;
            ulHtml.appendChild(finalMessage);
            buttonOk.disabled = true;
    }
})