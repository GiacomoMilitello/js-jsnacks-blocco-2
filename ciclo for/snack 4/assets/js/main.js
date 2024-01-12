/*
Ciclo For
snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const buttonOk = document.getElementById("ok");
var numberHtml = document.getElementById('number');

buttonOk.addEventListener('click', function() {
    var n = Number(numberHtml.value);
    var ulHtml = document.getElementById('result');
    ulHtml.innerHTML = '';

    for (var i = 0; i < 1; i++) {
        var listItem = document.createElement('li');
        if (n % 2 === 0) {
            listItem.textContent = 'Il numero ' + n + ' è un numero pari';
        } else {
            listItem.textContent = 'Il numero che hai inserito non è pari. Il numero successivo è: ' + (n + 1);
        }
        ulHtml.appendChild(listItem);
    }
})