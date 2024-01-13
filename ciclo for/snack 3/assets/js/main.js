/*
Ciclo For
snack 3
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro
*/

let nomi = ["Luca", "Giulia", "Marco", "Sofia", "Matteo", "Alessia", "Andrea", "Chiara", "Francesco", "Martina"];
let cognomi = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Conti", "Esposito", "Ricci", "Marino", "Greco", "Bruno", "Moretti"];

let listaNomi = document.getElementById('nomi');
let listaCognomi = document.getElementById('cognomi');

document.getElementById('ok').addEventListener('click', function() {
    let nomeInserito = document.getElementById('name').value;
    if(nomi.length < cognomi.length) {
        nomi.push(nomeInserito);
    }
    
    if(nomi.length === cognomi.length) {
        for(let i = 0; i < nomi.length; i++) {
            let elementoNome = document.createElement('li');
            elementoNome.textContent = nomi[i];
            listaNomi.appendChild(elementoNome);

            let elementoCognome = document.createElement('li');
            elementoCognome.textContent = cognomi[i];
            listaCognomi.appendChild(elementoCognome);

            let result = document.getElementById('result');
            result.innerHTML = "HAI AGGIUNTO I 5 NOMI MANCANTI!!";
        }
    }
})